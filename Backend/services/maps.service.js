const axios = require('axios');
const captainModel = require('../models/captain.model');

/**
 * Get coordinates (lat/lng) for a given address using Nominatim (OpenStreetMap)
 */
module.exports.getAddressCoordinate = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'uber-app-demo' }
        });

        if (response.data.length > 0) {
            const location = response.data[0];
            return {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lon)
            };


        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Nominatim error:', error.message);
        throw error;
    }
};

/**
 * Get driving distance and estimated time using OSRM (Open Source Routing Machine)
 * Public API (no key needed)
 */
module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=false`;



    try {
        const response = await axios.get(url);
        if (response.data.code === 'Ok' && response.data.routes.length > 0) {
            const route = response.data.routes[0];
            return {
                distance: route.distance, // in meters
                duration: route.duration  // in seconds
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.error('OSRM error:', error.message);
        throw error;
    }
};

/**
 * Get location autocomplete suggestions using Nominatim
 */
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) throw new Error("Query is required");

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(input)}&format=json&addressdetails=1&limit=5`;

    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'uber-app-demo' }
        });

        return response.data.map(place => place.display_name);
    } catch (error) {
        console.error('Autocomplete error:', error.message);
        throw error;
    }
};

/**
 * Find captains within a geographic radius (in km)
 */
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    // radius is in km
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371] // Earth radius in km
            }
        }
    });

    return captains;
};

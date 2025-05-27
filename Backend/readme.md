# Uber-Backend

Backend API for an Uber-like ride-hailing application using Node.js, Express, MongoDB, and open-source mapping services.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This backend service handles core functionalities of a ride-hailing app such as:

- Address geocoding (latitude & longitude)
- Autocomplete address suggestions
- Calculating driving distance and duration between locations
- Finding available captains within a geographic radius
- Managing rides and captains

It leverages open-source tools:

- **Nominatim** (OpenStreetMap) for geocoding & autocomplete
- **OSRM** (Open Source Routing Machine) for routing and distance/time estimation

---

## Features

- **Get Coordinates**: Convert address strings into latitude and longitude using Nominatim API.
- **Get Distance and Time**: Calculate driving distance and estimated time using OSRM API.
- **Autocomplete Addresses**: Suggest addresses based on partial user input.
- **Geoqueries**: Find captains/drivers within a radius using MongoDB geospatial queries.
- **Ride Management**: Create rides, associate them with captains, calculate fares, etc.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Axios (for HTTP requests)
- Nominatim (OpenStreetMap API)
- OSRM (Routing API)
- Joi / express-validator (validation)

---

## Installation

1. Clone this repo:
   ```bash
   git clone https://github.com/Digvijay7310/uber-backend.git
   cd uber-backend
   ```

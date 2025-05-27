# Uber-Frontend

Frontend application for an Uber-like ride-hailing service built with React.js.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This frontend app provides users with:

- Address search with autocomplete
- Map visualization of locations and routes
- Ride booking interface with fare and ETA
- Display of nearby captains/drivers
- Real-time updates of ride status (optional)

The app consumes backend APIs for geocoding, routing, and ride management.

---

## Features

- **Location Autocomplete:** Suggestions as users type addresses.
- **Geocoding:** Convert addresses to map coordinates.
- **Route Display:** Show route between pickup and drop-off points.
- **Fare Estimation:** Display estimated ride cost based on distance/time.
- **Nearby Drivers:** Show captains within user’s vicinity.
- **Responsive UI:** Mobile-friendly and desktop compatible.

---

## Tech Stack

- React.js (with Hooks)
- Axios (for HTTP requests)
- React Router (for SPA routing)
- Leaflet or Google Maps API (for maps and route visualization)
- Context API or Redux (for state management)
- CSS Modules / Styled Components / Tailwind CSS (styling)

---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/Digvijay7310/uber-frontend.git
cd uber-frontend
```

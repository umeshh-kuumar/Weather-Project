# Weather Project

A beautiful weather application built with React and Vite that displays real-time weather information for any city.

## Features

- 🔍 Search for weather by city name
- 🌡️ Real-time temperature display
- 💧 Humidity information
- 💨 Wind speed data
- 🎨 Dynamic weather icons based on conditions
- 📱 Responsive design

## Setup

### 1. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API keys section
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key from OpenWeatherMap.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View the current weather information for that city

## Technologies Used

- React
- Vite
- Tailwind CSS
- OpenWeatherMap API

# weather-app

A single-page React app that looks up the current weather for a city name using the OpenWeatherMap API.

**Live demo:** https://m-ashrey.github.io/weather-app/

## Stack

- React 18 (Create React App / `react-scripts` 5)
- `axios` for the API call
- Plain CSS

## What it does / what it demonstrates

Type a city name, hit "Get Weather", and it calls OpenWeatherMap's [Current Weather Data API](https://openweathermap.org/current) and renders the city name, country, temperature (°C), and a short conditions description. It's a small, focused demo of calling a third-party REST API from a form and rendering the response conditionally — `WeatherApp.js` owns the fetch + input state, `WeatherCard.js` renders the result (or nothing, if there's no data yet).

## Running locally

```bash
git clone https://github.com/M-Ashrey/weather-app.git
cd weather-app
npm install
cp .env.example .env   # then add your own OpenWeatherMap key
npm start              # http://localhost:3000
```

```bash
npm run build   # production build to build/
```

Both commands were verified against Node 22 while writing this README.

## API key

The app reads an OpenWeatherMap API key from `REACT_APP_WEATHER_API_KEY` (see `.env.example`) — get a free one at [openweathermap.org](https://openweathermap.org/appid). Without it, the input/button still render but weather lookups will fail.

An earlier version of this app had a key hardcoded directly in `src/WeatherApp.js`. That's been fixed — it now loads from the environment instead — but the old key spent time in this repo's public history and should be treated as compromised if it's still active on OpenWeatherMap's side.

**Live demo status:** the GitHub Pages build above needs a `REACT_APP_WEATHER_API_KEY` repository secret (Settings → Secrets and variables → Actions) so the deploy workflow can bake in a working key at build time. Until that secret is set, the page loads but weather lookups return an error.

## Known limitations

- No error message in the UI for an unknown city or a failed request — it just logs to the console and the card doesn't update (see the `catch` in `fetchWeatherData`, `WeatherApp.js`).
- No loading state while the request is in flight.
- No tests beyond the CRA default.

## Status

Built in 2023 as a small learning project (first real component split + external API call). Kept public as portfolio history.

## License

MIT — see [LICENSE](./LICENSE).

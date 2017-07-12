const API_KEY = '3ea6e3caa9f8760f2641186cf3e179cd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  //returns action
  return {
    type: FETCH_WEATHER,
  };
}

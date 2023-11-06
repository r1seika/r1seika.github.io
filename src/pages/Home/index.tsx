import { useState } from 'react';
import { ForecastResponse } from '../../types';
import LocationInput from '../../components/LocationInput/index';
import CurrentWeather from './comps/CurrentWeather';
import NextNDays from './comps/NextNDays';
import './index.scss';

const Home = () => {
  const [forecastData, setForecastData] = useState({});

  function onCallback(forecastResponse: ForecastResponse) {
    setForecastData(forecastResponse);
  }
  return (
    <div className="home">
      <h1 className="app-name">Gaudy Weather</h1>
      <LocationInput onCallback={onCallback} />
      <CurrentWeather forecastData={forecastData} />
      <NextNDays forecastData={forecastData} />
    </div>
  );
};

export default Home;

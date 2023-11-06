import React from 'react';
import LocationInput from '../../components/LocationInput/index';
import CurrentWeather from './comps/CurrentWeather';
import './index.scss';

const Home: React.FC = () => {
  function onCallback(location: any, current: any) {
    console.log(location, current);
  }
  return (
    <div className="home">
      <h1 className="app-name">Gaudy Weather</h1>
      <LocationInput onCallback={onCallback} />
      <CurrentWeather />
    </div>
  );
};

export default Home;

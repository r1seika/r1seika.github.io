import { useNavigate, useLocation } from 'react-router-dom';
import LocationInput from '../../components/LocationInput/index';
import WeatherInfo from './comps/WeatherInfo';
import './index.scss';

const Detail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get('date');
  const onEnter = function (location: string) {
    navigate(`/home?location=${location}`);
  };

  return (
    <div className="home">
      <h1 className="app-name">{date}</h1>
      <LocationInput onEnter={onEnter} />
      <WeatherInfo info={state} />
      {/* <LocationInput onCallback={onCallback} /> */}
      {/* <NextNDays forecastData={forecastData} /> */}
    </div>
  );
};

export default Detail;

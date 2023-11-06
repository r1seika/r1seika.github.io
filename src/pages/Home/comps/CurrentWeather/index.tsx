import { ForecastResponse } from '../../../../types';
import './index.scss';

type CurrentWeatherParams = {
  forecastData: ForecastResponse;
};

const CurrentWeather = function (params: CurrentWeatherParams) {
  const {
    forecastData: { location, current },
  } = params;

  if (!location || !current) return null;
  return (
    <div className="current-weather">
      <div className="wrap">
        <div className="location-name">{location?.name}</div>
        <div className="current-wrap">
          <div className="current-item">
            <img
              src={current?.condition?.icon}
              alt="condition"
              className="item-up"
            />
            <span className="item-down">{current?.condition?.text}</span>
          </div>
          <div className="current-item">
            <span className="item-up">
              {current?.air_quality?.['gb-defra-index']}
            </span>
            <span className="item-down">AQI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

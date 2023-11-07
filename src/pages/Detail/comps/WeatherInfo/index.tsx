import { ForecastDay } from '../../../../types';
import './index.scss';

type WeatherInfoParams = {
  info: ForecastDay;
};

const indexToBand = [
  '',
  'Good',
  'Moderate',
  'Unhealthy for sensitive group',
  'Unhealthy',
  'Very Unhealthy',
  'Hazardous',
];

const WeatherInfo = (params: WeatherInfoParams) => {
  const { info } = params;

  if (!info) return null;

  return (
    <div className="weather-info">
      <div className="wrap">
        <div className="title">Weather at {info.date}</div>
        <div className="current-wrap">
          <div className="current-item">
            <div className="item-up">
              <img src={info?.day?.condition?.icon} alt="condition" />
            </div>
            <span className="item-down">{info?.day?.condition?.text}</span>
          </div>
          <div className="current-item">
            <span className="item-up text">
              {info?.day?.air_quality?.['us-epa-index']
                ? indexToBand[info?.day?.air_quality?.['us-epa-index']]
                : 'unknow'}
            </span>
            <span className="item-down">AQI</span>
          </div>
          <div className="current-item">
            <span className="item-up text">{info?.day?.maxtemp_c}­°C</span>
            <span className="item-down">Max Temp</span>
          </div>
          <div className="current-item">
            <span className="item-up text">{info?.day?.mintemp_c}­°C</span>
            <span className="item-down">Min Temp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

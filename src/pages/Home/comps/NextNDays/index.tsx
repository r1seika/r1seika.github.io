import { useNavigate } from 'react-router-dom';
import { ForecastResponse, ForecastDay } from '../../../../types';
import './index.scss';

type CurrentWeatherParams = {
  forecastData: ForecastResponse;
};

const numberToDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const NextNDays = function (params: CurrentWeatherParams) {
  const navigate = useNavigate();
  const {
    forecastData: { location, forecast },
  } = params;

  if (!forecast) return null;

  const goToHome = function (location?: string, item?: ForecastDay) {
    navigate(`/detail?location=${location}&date=${item?.date}`, {
      state: item,
    });
  };

  return (
    <div className="next-n-days">
      <div className="wrap">
        <div className="title">Next N days</div>
        <div className="forecast-wrap">
          {forecast?.forecastday?.map((item, index) => {
            const day = index
              ? numberToDay[new Date(item?.date || '').getDay()]
              : 'Today';

            return (
              <div
                onClick={() => {
                  goToHome(location?.name, item);
                }}
                className="forecast-item"
                key={index}
              >
                <span className="item-day">{day}</span>
                <img
                  src={item?.day?.condition?.icon}
                  alt="condition"
                  className="item-condition-pic"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NextNDays;

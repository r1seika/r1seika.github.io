import { useState, useEffect } from 'react';
import { LocationInputCallback } from '../../types';
import './index.scss';

type LocationInputParams = {
  onEnter?: (location: string) => void;
  onCallback?: LocationInputCallback;
};

const LocationInput = function (params: LocationInputParams) {
  const [inputLocation, setInputLocation] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { onEnter, onCallback } = params;

  const getForecastData = (
    location: string,
    onCallback?: LocationInputCallback,
  ) => {
    fetch(`http://43.132.201.188/forecast?location=${location}`)
      .then(response => response.json())
      .then(data => {
        const { code, message } = data;
        if (code && message) {
          setErrMsg(message);
        } else if (onCallback) {
          onCallback(data);
          setErrMsg('');
        }
      })
      .catch(error => {
        setErrMsg('Request failed.');
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    if (location) {
      setInputLocation(location);
      getForecastData(location, onCallback);
    }
  }, [onCallback]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      if (onEnter) {
        onEnter(inputLocation);
        return;
      }
      getForecastData(inputLocation, onCallback);
    }
  };

  return (
    <div className="location-input">
      <div className="wrap">
        <label htmlFor="locationInput" className="label">
          Location Input
        </label>
        <input
          id="locationInput"
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <div className="error-message">{errMsg}</div>
      </div>
    </div>
  );
};

export default LocationInput;

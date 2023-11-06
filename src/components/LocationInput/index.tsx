import { useState } from 'react';
import { LocationInputCallback } from '../../types';
import './index.scss';

type LocationInputParams = {
  onCallback: LocationInputCallback;
};

const LocationInput = function (params: LocationInputParams) {
  const [inputLocation, setInputLocation] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { onCallback } = params;

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      fetch(`http://localhost:3001/forecast?location=${inputLocation}`)
        .then(response => response.json())
        .then(data => {
          const { code, message } = data;
          if (code && message) {
            setErrMsg(message);
          } else {
            onCallback(data);
            setErrMsg('');
          }
        })
        .catch(error => {
          setErrMsg('Request failed.');
        });
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

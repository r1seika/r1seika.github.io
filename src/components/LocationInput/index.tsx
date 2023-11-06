import { useState } from 'react';
import { locationInputCallback } from '../../types';
import './index.scss';

type Params = {
  onCallback: locationInputCallback;
};

const LocationInput = function (params: Params) {
  const [inputLocation, setInputLocation] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { onCallback } = params;

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      fetch(`http://localhost:3001/current?location=${inputLocation}`)
        .then(response => response.json())
        .then(data => {
          const { code, message, location, current } = data;
          if (code && message) {
            setErrMsg(message);
          } else {
            onCallback(location, current);
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

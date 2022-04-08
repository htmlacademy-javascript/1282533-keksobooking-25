import './ad-form-validate.js';
import './slider.js';
// import './filter.js';

import {serverAdvertisementPinMap, advertisementFilter} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';

getData((data) => {
  serverAdvertisementPinMap(data);
  advertisementFilter(data, serverAdvertisementPinMap);
}, getDataLoadingErrorMessage);

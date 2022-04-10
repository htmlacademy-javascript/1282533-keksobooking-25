import './ad-form-validate.js';
import './slider.js';

import {debounce} from './util.js';
import {RERENDER_DELAY} from './constants.js';
import {advertisementFilter} from './filter.js';
import {serverAdvertisementPinMap} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';

getData((data) => {
  serverAdvertisementPinMap(data);
  advertisementFilter(
    data,
    debounce(
      serverAdvertisementPinMap,
      RERENDER_DELAY,
    ));
}, getDataLoadingErrorMessage);

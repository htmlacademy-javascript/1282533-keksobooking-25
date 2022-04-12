import './ad-form-validate.js';
import './slider.js';

import {debounce} from './util.js';
import {RERENDER_DELAY} from './constants.js';
import {getFilteredAd} from './filter.js';
import {showServerAd} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';

getData((data) => {
  showServerAd(data);
  getFilteredAd(
    data,
    debounce(
      showServerAd,
      RERENDER_DELAY,
    ));
}, getDataLoadingErrorMessage);

import './ad-form-validate.js';
import './slider.js';

import {debounce} from './util.js';
import {RERENDER_DELAY} from './constants.js';
import {onChangeMapFilter} from './filter.js';
import {showServerAd} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';

getData((data) => {
  showServerAd(data);
  onChangeMapFilter(
    data,
    debounce(
      showServerAd,
      RERENDER_DELAY,
    ));
}, getDataLoadingErrorMessage);

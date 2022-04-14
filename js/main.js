import './ad-form-validate.js';
import './slider.js';
import './upload-file.js';

import {debounce} from './util.js';
import {RERENDER_DELAY} from './constants.js';
import {addMapFilterEventListener, addResetMapFilterEventListener} from './filter.js';
import {showServerAd} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';
import {activateMapFilterForm} from './toggle-form-state.js';

getData((data) => {
  showServerAd(data);
  addMapFilterEventListener(
    data,
    debounce(
      showServerAd,
      RERENDER_DELAY,
    ));
  addResetMapFilterEventListener(
    data,
    debounce(
      showServerAd,
      RERENDER_DELAY,
    ));
}, activateMapFilterForm, getDataLoadingErrorMessage);

import './ad-form-validate.js';
import './slider.js';

import {ARRAY_USERS_COUNT} from './constants.js';
import {serverAdvertisementPinMap} from './map.js';
import {getDataLoadingErrorMessage} from './data.js';
import {getData} from './api.js';

getData(serverAdvertisementPinMap, getDataLoadingErrorMessage, ARRAY_USERS_COUNT);

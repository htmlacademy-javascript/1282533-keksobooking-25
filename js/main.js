import './ad-form-validate.js';
import './map.js';
import './slider.js';
import './reset.js';

import {serverAdvertisementPinMap} from './map.js';

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((Response) => Response.json())
  .then((data) => serverAdvertisementPinMap(data.slice(0, 10)));

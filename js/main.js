import './ad-form-validate.js';
import './map.js';
import './slider.js';
import './reset.js';

import { advertisementPinMap } from './map.js';

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((Response) => Response.json())
  .then((data) => advertisementPinMap(data.slice(0, 10)));

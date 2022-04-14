const mapFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

const serialize = (form) => {
  const selectedValue = {};
  for (let i = 0; i < form.children.length; i++) {
    // eslint-disable-next-line no-unused-vars
    const [_, key] = form.children[i].name.split('-');
    selectedValue[key] = form.children[i].value;
  }
  selectedValue.features = [];
  return selectedValue;
};

const enumPrice = {
  any: 'any',
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, 100000],
};

const getFilterValue = (evt, filterValue) => {
  if (evt.target.name === 'housing-type') {
    filterValue.type = evt.target.value;
  }
  if (evt.target.name === 'housing-price') {
    filterValue.price = enumPrice[evt.target.value];
  }
  if (evt.target.name === 'housing-rooms') {
    filterValue.rooms = evt.target.value;
  }
  if (evt.target.name === 'housing-guests') {
    filterValue.guests = evt.target.value;
  }

  if (evt.target.name === 'features') {
    if (evt.target.checked) {
      if (!filterValue.features) {
        filterValue.features = [];
      }
      filterValue.features.push(evt.target.value);
    } else {
      const index = filterValue.features.indexOf(evt.target.value);
      filterValue.features.splice(index, 1);
    }
  }

  if (filterValue.features) {
    if (filterValue.features.length === 0) {
      delete filterValue.features;
    }
  }

  return filterValue;
};

const getFilteredAds = (filterValue, data) => data.filter(({offer}) => {
  const isValues = [];
  Object.entries(filterValue).forEach(([key, value]) => {
    if (value === 'any') {
      isValues.push(true);
    } else if (key === 'type') {
      isValues.push(offer[key] === value);
    } else if (key === 'price') {
      const [min, max] = value;
      isValues.push(offer[key] <= max && offer[key] >= min);
    } else if (key === 'features' && offer[key]) {
      isValues.push(value.every((element) => offer[key].includes(element)));
    } else {
      isValues.push(offer[key] === +value);
    }
  });
  return isValues.every((element) => element);
});

const cleanMap = () => {
  const leafletMarkerIcons = document.querySelectorAll('.remove');
  leafletMarkerIcons.forEach((value) => value.remove());

  const leafletPopup = document.querySelector('.leaflet-popup');
  if (leafletPopup) {
    leafletPopup.remove();
  }
};

const addMapFilterEventListener = (data, cb) => mapFilter.addEventListener('input', (evt) => {
  cb(getFilteredAds(getFilterValue(evt, serialize(mapFilter)), data));
  cleanMap();
});

const addResetMapFilterEventListener = (data, cb) => resetButton.addEventListener('click', () => {
  cleanMap();
  cb(data);
});

export {addMapFilterEventListener, addResetMapFilterEventListener};

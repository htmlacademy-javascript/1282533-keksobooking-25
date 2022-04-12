const mapFilter = document.querySelector('.map__filters');

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

const mapFilterValue = serialize(mapFilter);

const enumPrice = {
  any: 'any',
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, 100000],
};

const getFilterValue = (evt) => {
  if (evt.target.name === 'housing-type') {
    mapFilterValue.type = evt.target.value;
  }
  if (evt.target.name === 'housing-price') {
    mapFilterValue.price = enumPrice[evt.target.value];
  }
  if (evt.target.name === 'housing-rooms') {
    mapFilterValue.rooms = evt.target.value;
  }
  if (evt.target.name === 'housing-guests') {
    mapFilterValue.guests = evt.target.value;
  }

  if (evt.target.name === 'features') {
    if (evt.target.checked) {
      if (!mapFilterValue.features) {
        mapFilterValue.features = [];
      }
      mapFilterValue.features.push(evt.target.value);
    } else {
      const index = mapFilterValue.features.indexOf(evt.target.value);
      mapFilterValue.features.splice(index, 1);
    }
  }

  if (mapFilterValue.features) {
    if (mapFilterValue.features.length === 0) {
      delete mapFilterValue.features;
    }
  }

  return mapFilterValue;
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

  if (document.querySelector('.leaflet-popup')) {
    document.querySelector('.leaflet-popup').remove();
  }
};

const addMapFilterEventListener = (data, cb) => mapFilter.addEventListener('change', (evt) => {
  cb(getFilteredAds(getFilterValue(evt), data));
  cleanMap();
});

export {addMapFilterEventListener};

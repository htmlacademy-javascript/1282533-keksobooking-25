const mapFilter = document.querySelector('.map__filters');

const serialize = (form) => {
  const selectValue = {};
  for (let i = 0; i < form.children.length; i++) {
    // eslint-disable-next-line no-unused-vars
    const [_, key] = form.children[i].name.split('-');
    selectValue[key] = form.children[i].value;
  }
  selectValue.features = [];
  return selectValue;
};

const mapFilterValue = serialize(mapFilter);

const enumPrice = {
  any: 'any',
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, 100000],
};

const advertisementFilter = (data, cb) => {
  mapFilter.addEventListener('change', (evt) => {
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
        if (!Object.keys(mapFilterValue).includes('features')) {
          mapFilterValue.features = [];
        }
        mapFilterValue.features.push(evt.target.value);
      } else {
        const index = mapFilterValue.features.indexOf(evt.target.value);
        mapFilterValue.features.splice(index, 1);
      }
    }

    if (Object.keys(mapFilterValue).includes('features')) {
      if (mapFilterValue.features.length === 0) {
        delete mapFilterValue.features;
      }
    }

    const filteredData = data.filter(({offer}) => {
      const valuesFilter = [];
      Object.entries(mapFilterValue).forEach(([key, value]) => {
        if (value === 'any') {
          valuesFilter.push(true);
        } else if (key === 'type') {
          valuesFilter.push(offer[key] === value);
        } else if (key === 'price') {
          const [min, max] = value;
          valuesFilter.push(offer[key] <= max && offer[key] >= min);
        } else if (key === 'features' && offer[key]) {
          valuesFilter.push(value.every((element) => offer[key].includes(element)));
        } else {
          valuesFilter.push(offer[key] === +value);
        }
      });
      return valuesFilter.every((element) => element);
    });

    const unnecessaryPinMap = document.querySelectorAll('.remove');
    unnecessaryPinMap.forEach((value) => value.remove());
    cb(filteredData);
  });
};

export {advertisementFilter};

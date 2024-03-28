export const categoriesAsObject = {
  cat1: {
    _id: '1',
    group: 'Доступность',
    name: 'Доступно',
    color: '0xFF2020',
  },
  cat2: {
    _id: '2',
    group: 'Доступность',
    name: 'Недоступно',
    color: '0xC040FF',
  },
  cat3: {
    _id: '3',
    group: 'Доступность',
    name: 'Средне',
    color: '0x40AAFF',
  },
  cat11: {
    _id: '11',
    group: 'Тип',
    name: 'Центры быта',
  },
  cat12: {
    _id: '12',
    group: 'Тип',
    name: 'Госпитали',
  },
  cat13: {
    _id: '13',
    group: 'Тип',
    name: 'Детcкие сады',
  },
  cat14: {
    _id: '14',
    group: 'Тип',
    name: 'Учреждения культуры',
  },
};

export const categories = Object.keys(categoriesAsObject).map((key) => ({ ...categoriesAsObject[key] }));

// возвращает целиком все данные categories
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories);
    }, 1200);
  });

export default {
  fetchAll,
};

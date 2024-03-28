import { categoriesAsObject as cats } from './categories.api';

export const locationsAsObject = {
  loc1: {
    _id: '1',
    adress: 'улица Оптиков, 22Б',
    // categories: [cats.cat1._id, cats.cat11._id],
    info: 'Сквозной участок приобретён Обществом для постройки двух зданий, второе располагалось по адресу Можайская ул., д. 8. Деревянный дом, выходящий фасадом на ул. Рузовскую, перестроен в каменный по проекту архитектора Зайцева Д. Д. Здание в стиле эклектики позднее надстроено до 4 этажей. В нём располагался приют для девочек',
    geo: '59.997301, 30.227003',
    //search: 'Lorem ipsum dolor',
  },
  loc2: {
    _id: '2',
    adress: 'исторический район Колтовская Слобода',
    // categories: [cats.cat3._id, cats.cat12._id, cats.cat14._id],
    info: 'Сквозной участок приобретён Обществом для постройки двух зданий, второе располагалось по адресу Можайская ул., д. 8. Деревянный дом, выходящий фасадом на ул. Рузовскую, перестроен в каменный по проекту архитектора Зайцева Д. Д. Здание в стиле эклектики позднее надстроено до 4 этажей. В нём располагался приют для девочек',
    geo: '59.964110, 30.280082',
    // search: 'Lorem ipsum dolor',
  },
  loc3: {
    _id: '3',
    adress: 'Петрозаводская улица, 13',
    // categories: [cats.cat1._id, cats.cat3._id, cats.cat11._id, cats.cat13._id, cats.cat14._id],
    info: 'Сквозной участок приобретён Обществом для постройки двух зданий, второе располагалось по адресу Можайская ул., д. 8. Деревянный дом, выходящий фасадом на ул. Рузовскую, перестроен в каменный по проекту архитектора Зайцева Д. Д. Здание в стиле эклектики позднее надстроено до 4 этажей. В нём располагался приют для девочек',
    geo: '59.965231, 30.288201',
    // search: 'Lorem ipsum dolor',
  },
};

export const locations = Object.keys(locationsAsObject).map((key) => ({ ...locationsAsObject[key] }));

if (!localStorage.getItem('locations')) {
  localStorage.setItem('locations', JSON.stringify(locations));
}

// возвращает целиком все данные locations
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('locations')));
    }, 200);
  });

const add = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const locations = JSON.parse(localStorage.getItem('locations'));
      const newItem = {
        ...data,
        created_at: Date.now(),
        _id: Math.random().toString(36).substr(2, 9),
      };
      locations.push(newItem);
      localStorage.setItem('locations', JSON.stringify(locations));
      resolve(newItem);
    }, 200);
  });

const remove = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const locations = JSON.parse(localStorage.getItem('locations'));
      const newData = locations.filter((x) => x._id !== id);
      console.log(id);
      console.log(newData);
      localStorage.setItem('locations', JSON.stringify(newData));
      resolve(id);
    }, 200);
  });

export default {
  fetchAll,
  add,
  remove,
};

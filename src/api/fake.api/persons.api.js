export const personsAsObject = {
  doctor: { _id: '1', name: 'Доктор Иванов', info: 'Lorem ipsum dolor' },
  waiter: { _id: '2', name: 'Официант Петров', info: 'Lorem ipsum dolor' },
  physics: { _id: '3', name: 'Физик Сидоров', info: 'Lorem ipsum dolor' },
  engineer: { _id: '4', name: 'Инженер Кукушкина', info: 'Lorem ipsum dolor' },
  actor: { _id: '5', name: 'Актер Михалков', info: 'Lorem ipsum dolor' },
  cook: { _id: '6', name: 'Повар Газманов', info: 'Lorem ipsum dolor' },
};

export const persons = Object.keys(personsAsObject).map((key) => ({ ...personsAsObject[key] }));

// возвращает целиком все данные persons
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(persons);
    }, 1000);
  });

// возвращает полные данные об одной персоне
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(persons.find((user) => user._id === id));
    }, 500);
  });

export default {
  fetchAll,
  getById,
};

import { personsAsObject as pers } from './persons.api';
import { categoriesAsObject as cats } from './categories.api';
import { locationsAsObject as locs } from './locations.api';

/*
export interface IOrganization {
  _id: string;  
  name: string; // org 210a
  image?: string; ссылки на главную картинку (необязательно!), org 856u (И2=1)  
  locations: ILocation[]; // связь с локациями(адресами), минимум 1 адрес д.б., org 515a
  categories: ICategory[]; // org 550a - категории для фильтра на карте
  alt_names?: string[]; // org 410a (необязатльно)
  info: string; // org 300a
  persons?: IPerson[]; // связь с персонами (необязатльно), org 500a
  organizations?: IOrganization[]; // связь с другими организациями (необязатльно), org 510a
  links?: ILink[]; // ссылки по теме (необязатльно), org 856u (И2=0)
  gallery?: string[]; // ссылки на картинки (необязательно!), org 856u (И2=1) для галереи-карусели
}
*/

const organizations = [
  {
    _id: '1',
    name: 'Дом ветеранов',
    image:
      'https://charity.lbspb.ru/system/pages/000/013/55/images/small/d34fd6d0472be9d7ccc415d86404e582df3b2fa5.jpg?1701963195',
    locations: [locs.loc1._id],
    categories: [cats.cat1._id, cats.cat11._id],
    alt_names: ['Дом номер 2', 'Дом номер 3'],
    info: 'Частное благотворительное общество, основанное в 1898 году под покровительством императрицы Марии Фёдоровны, супруги Александра III. Со временем взяло на себя функции центрального органа, возглавившего дело призрения, обучения и воспитания глухонемых. Имело отделения во многих городах России.В Санкт-Петербурге Попечительство заботилось о Доме призрения и Школе глухонемых (Мариинская школа-колония в Мурзинке), а кроме того, в 1902-1915 годах издавало ежемесячный журнал «Вестник Попечительства императрицы Марии Фёдоровны о глухонемых» (типография находилась по адресу: Гороховая ул., 18). Патронируемые Попечительством учреждения: Дом призрения и школа глухонемых (Мариинская); Мастерские столярного и переплетного мастерства при Мариинской школе; Дом призрения для престарелых и неспособных к труду глухонемых; Амбулатория для приходящих в здании Училища глухонемых; Бюро для наведения справок о семейном и материальном положении частных глухонемых, обращавшихся за помощью. В 1917 году перешло в ведение Управления Мариинскими благотворительными заведениями, а в 1918 году было ликвидировано.',
    persons: [pers.actor._id, pers.doctor._id],
    organizations: ['2'],
    links: [
      'Попечительство императрицы Марии Фёдоровны о глухонемых : [историческая справка]$http://encspb.ru/object/2815811872?lc=ru',
      'Векслер А.Ф. Попечитель // Родина. 1992. № 11/12. С. 123-128$https://ya.ru',
    ],
    gallery: [
      'https://charity.lbspb.ru/system/pages/000/010/47/images/small/cf27cb641f64f57e40998791937d3eadd032932d.jpg?1648817389',
      'https://charity.lbspb.ru/system/pages/000/013/55/images/small/d34fd6d0472be9d7ccc415d86404e582df3b2fa5.jpg?1701963195',
      'https://charity.lbspb.ru/system/pages/000/011/85/images/small/57ab31f63a1402542cb132ffbe44def4d3cb2a23.jpg?1659707618',
    ],
  },
  {
    _id: '2',
    name: 'Дом пионеров',
    image:
      'https://charity.lbspb.ru/system/pages/000/013/55/images/small/d34fd6d0472be9d7ccc415d86404e582df3b2fa5.jpg?1701963195',
    locations: [locs.loc2._id],
    categories: [cats.cat3._id, cats.cat12._id, cats.cat14._id],
    alt_names: ['Дом номер 22', 'Дом номер 33'],
    info: 'Создается под председательством К. К. Грота (1815-1897) на базе Главного Попечительства для пособия нуждающимся семействам воинов, учрежденного во время русско-турецкой войны. Для слепых солдат открываются ремесленные училища-интернаты. Слепые других сословий также начинают активно обращаться с просьбами в это попечительство. Становится очевидно, что необходимо создавать постоянное общество и заботиться об участи всех слепых. Одна из основных целей нового Попечительства — подготовка слепых к самостоятельной трудовой жизни.',
    persons: [pers.physics._id, pers.engineer._id],
    organizations: ['1'],
    links: [
      'Попечительство императрицы Марии Фёдоровны о глухонемых : [историческая справка]$http://encspb.ru/object/2815811872?lc=ru',
      'Векслер А.Ф. Попечитель // Родина. 1992. № 11/12. С. 123-128$https://ya.ru',
    ],
    gallery: [
      'https://charity.lbspb.ru/system/pages/000/010/47/images/small/cf27cb641f64f57e40998791937d3eadd032932d.jpg?1648817389',
    ],
  },
  {
    _id: '3',
    name: 'Дом призраков',
    image:
      'https://charity.lbspb.ru/system/pages/000/013/55/images/small/d34fd6d0472be9d7ccc415d86404e582df3b2fa5.jpg?1701963195',
    locations: [locs.loc3._id],
    categories: [cats.cat1._id, cats.cat3._id, cats.cat11._id, cats.cat13._id, cats.cat14._id],
    info: 'Ужастики какие-то....',
    gallery: [
      'https://charity.lbspb.ru/system/pages/000/010/47/images/small/cf27cb641f64f57e40998791937d3eadd032932d.jpg?1648817389',
      'https://charity.lbspb.ru/system/pages/000/011/85/images/small/57ab31f63a1402542cb132ffbe44def4d3cb2a23.jpg?1659707618',
    ],
  },
  {
    _id: '4',
    name: 'Музей',
    locations: [locs.loc3._id],
    categories: [cats.cat2._id, cats.cat3._id, cats.cat12._id, cats.cat13._id, cats.cat14._id],
    info: 'Ночь в музее 2',
  },
];

if (!localStorage.getItem('organizations')) {
  localStorage.setItem('organizations', JSON.stringify(organizations));
}

// возвращает минимально необходимую информацию для показа на карте (_id, name, image, locations, categories)
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('organizations')).map((o) => {
          o._id, o.name, o.image, o.locations, o.categories;
        })
      );
    }, 1000);
  });

// // краткий формат _id - name для отображения на карте в момент клика
// const fetchByLocation = (locId) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(
//         JSON.parse(localStorage.getItem('organizations'))
//           .filter((c) => c.locations.findIndex((a) => a === locId) != -1)
//           .map((o) => {
//             o._id, o.name;
//           })
//       );
//     }, 200);
//   });

//   // нужно ли отдельное API? по идее на стороне клиента будет поиск и фильтрация
// const fetchByCategory = (catId) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(
//         JSON.parse(localStorage.getItem('locations')).filter((c) => c.categories.findIndex((a) => a === catId) != -1)
//       );
//     }, 200);
//   });

// возвращает только список id организаций согласно поисковому запросу
const search = (text) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('organizations'))
          .filter((c) => Math.random() > 0.5)
          .map((o) => {
            o._id;
          })
      );
    }, 200);
  });

const add = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const organizations = JSON.parse(localStorage.getItem('organizations'));
      const newItem = {
        ...data,
        created_at: Date.now(),
        _id: Math.random().toString(36).substr(2, 9),
      };
      organizations.push(newItem);
      localStorage.setItem('organizations', JSON.stringify(organizations));
      resolve(newItem);
    }, 200);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const organizations = JSON.parse(localStorage.getItem('organizations'));
    const index = organizations.findIndex((u) => u._id === id);
    organizations[index] = { ...organizations[index], ...data };
    localStorage.setItem('organizations', JSON.stringify(organizations));
    window.setTimeout(function () {
      resolve(organizations[index]);
    }, 1000);
  });

const remove = (id) =>
  new Promise((resolve, reject) => {
    // throw new Error('5555');
    const organizations = JSON.parse(localStorage.getItem('organizations'));
    const itemToRemove = organizations.find((u) => u._id === id);
    const newData = organizations.filter((u) => u._id !== id);
    localStorage.setItem('organizations', JSON.stringify(newData));
    // window.setTimeout(function () {
    //   resolve(itemToRemove);
    // }, 1000);
    window.setTimeout(function () {
      reject('555');
    }, 1000);
  });

// возвращает полные данные об одной организации
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('organizations')).find((org) => org._id === id));
    }, 500);
  });

export default {
  fetchAll,
  search,
  getById,
  update,
  remove,
};

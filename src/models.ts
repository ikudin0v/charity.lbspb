export interface ILocation {
  _id: string;
  adress: string; // geo 515a
  info: string; // geo 300a
  geo: string; // координаты в формате строки из я.карт: "59.997301, 30.227003"
  search: string; // поисковый индекс (много текста из разных мест, по которым на карте можно будет искать точки)
}

export interface IOrganization {
  _id: string;
  locations: ILocation[]; // связь с локациями(адресами), минимум 1 адрес д.б., org 515a
  name: string; // org 210a
  image?: string; // ссылки на главную картинку (необязательно!), org 856u (И2=1)
  alt_names?: string[]; // org 410a (необязатльно)
  categories: ICategory[]; // org 550a - категории для фильтра на карте
  info: string; // org 300a
  persons?: IPerson[]; // связь с персонами (необязатльно), org 500a
  organizations?: IOrganization[]; // связь с другими организациями (необязатльно), org 510a
  links?: string[]; // ссылки по теме в формате "текст$url" (необязатльно), org 856u (И2=0)
  gallery?: string[]; // ссылки на картинки (необязательно!), org 856u (И2=1) для галереи-карусели
}

export interface IPerson {
  _id: string;
  name: string; // person 210a
  info: string; // person 300a
}

// export interface ILink {
//   _id: string;
//   name: string; // 856.2
//   url: string; // 856u
// }

export interface ICategory {
  _id: string;
  group: string; // см. UM_README.txt
  name: string; // 550a
  color?: string; // 0xFFAA33 (необязательно!)
}

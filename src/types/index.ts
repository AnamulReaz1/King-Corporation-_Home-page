export interface MenuItem {
  id: number;
  title: string;
  menuName: string;
  image: string;
}

export interface Location {
  long: number;
  lat: number;
}

export interface Shop {
  id: number;
  _id: string;
  name: string;
  pageTitle: string;
  heroImage: string;
  menu: MenuItem[];
  location: Location;
}

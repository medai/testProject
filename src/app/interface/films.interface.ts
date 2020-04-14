import { ORDER_DIRECTION } from '../constants/films.constants';

export interface Film {
 id: number;
 name: string;
 season: number;
 network: string;
 premiere: string;
 data?: string;
 genresId: number[];
}

export interface TableHeader {
  id: string;
  label: string;
}

export interface Option {
  id: number;
  name: string;
}

export interface FilmsFilter {
  search: string;
  page: number;
  pageSize: number;
  filters: {
    genreId: number;
    premiereYear: number;
  };
  order: {
    id: string,
    direction: ORDER_DIRECTION
  };
}


export interface TableData {
  films: Film[];
  counter: number;
}

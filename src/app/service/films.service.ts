import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FILM_LIST } from '../mock-data/films.mock';
import { Film, FilmsFilter, TableData } from '../interface/films.interface';
import * as moment from 'moment';
import { ORDER_DIRECTION } from '../constants/films.constants';

@Injectable()
export class FilmsService {
  filmList = FILM_LIST;
  constructor() {}

  getFilmList(filters: FilmsFilter): Observable<TableData> {
    return (of(this.getFilmListWIthFilters(filters)));
  }

  getFilmListWIthFilters(filters: FilmsFilter): TableData {
    const filmsWithSearch = this.filmList.filter(
      film => film.name.toLowerCase().includes(filters.search) || film.network.toLowerCase().includes(filters.search)
    );
    const filmsWithFilters = filmsWithSearch.filter(film => {
      const year = moment(film.premiere).year();
      const filmHasExactGenre = filters.filters.genreId ? film.genresId.includes(filters.filters.genreId) : true;
      const filmAtExactYear = filters.filters.premiereYear ? year === filters.filters.premiereYear : true;
      return filmHasExactGenre && filmAtExactYear;
    });
    const sortedList = this.sortList(filmsWithFilters, filters.order);

    return {
      films: this.getListWithPagination(sortedList, filters.page, filters.pageSize),
      counter: sortedList.length
    };
  }

  getListWithPagination(list: Film[], page: number, pageSize: number): Film[] {
    const lastEntity = pageSize * page;
    const firstEntity = lastEntity - pageSize;
    return list.slice(firstEntity, lastEntity);
  }

  sortList(films: Film[], order: {id: string, direction: ORDER_DIRECTION}) {
    return films.sort((filmPrev, filmNext) => {
      if (typeof filmPrev[order.id] === 'string') {
        return this.compareString(filmPrev[order.id] , filmNext[order.id], order.direction);
      }
      return this.compareNumber(filmPrev[order.id] , filmNext[order.id], order.direction);
    });
  }

  compareString(prevValue, nextValue, orderDirection) {
    if (orderDirection === ORDER_DIRECTION.ASC) {
      return prevValue > nextValue ? 1 : -1;
    } else {
      return nextValue > prevValue ? 1 : -1;
    }
  }

  compareNumber(prevValue, nextValue, orderDirection) {
    if (orderDirection === ORDER_DIRECTION.ASC) {
      return prevValue - nextValue;
    } else {
      return nextValue - prevValue;
    }
  }

}


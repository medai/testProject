import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FilmsService } from '../service/films.service';
import { TableData } from '../interface/films.interface';
import { Observable } from 'rxjs';
import { FilmsFilters } from '../constants/films.constants';

@Injectable()
export class FilmsResolver implements Resolve<TableData>{

  constructor(
    private filmsService: FilmsService
  ) {}

  resolve(): Observable<TableData> {
    return this.filmsService.getFilmList(new FilmsFilters());
  }
}

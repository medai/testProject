import { Film } from '../interface/films.interface';
import { GENRES_ID } from '../constants/films.constants';
import * as moment from 'moment';

export const FILM_LIST: Film[] = [
  {
    id: 1,
    name: 'The Terror 1',
    season: 5,
    network: 'AMC, Netflix',
    data: '01.01.2014',
    premiere: moment('2014-1-01', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  },
  {
    id: 2,
    name: 'Film 2',
    season: 2,
    network: ' AMC',
    data: '10.01.2014',
    premiere: moment('2014-1-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.DARK_COMEDY]
  },
  {
    id: 3,
    name: 'This film',
    season: 3,
    network: 'Netflix',
    data: '15.05.2017',
    premiere: moment('2017-5-15', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  },
  {
    id: 4,
    name: 'The Terror 2',
    season: 3,
    network: 'Netflix',
    data: '10.08.2015',
    premiere: moment('2015-8-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  },
  {
    id: 5,
    name: '01 film',
    season: 3,
    network: 'AMC',
    data: '20.10.2014',
    premiere: moment('2014-10-20', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DARK_COMEDY, GENRES_ID.HORROR]
  },
  {
    id: 6,
    name: 'NA film',
    season: 3,
    network: 'ATM',
    data: '20.11.2018',
    premiere: moment('2018-11-20', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.CRIME, GENRES_ID.HORROR]
  }, {
    id: 7,
    name: 'N film',
    season: 3,
    network: 'ATM',
    data: '10.02.2014',
    premiere: moment('2014-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  }, {
    id: 8,
    name: '1A film',
    season: 7,
    network: 'ATM',
    data: '10.02.2015',
    premiere: moment('2015-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.HORROR]
  }, {
    id: 9,
    name: 'AB film',
    season: 5,
    network: 'ATM',
    data: '10.02.2019',
    premiere: moment('2019-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.DARK_COMEDY]
  }, {
    id: 10,
    name: 'B film',
    season: 1,
    network: 'ATM',
    data: '10.02.2016',
    premiere: moment('2016-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.DRAMA, GENRES_ID.HORROR]
  }, {
    id: 11,
    name: 'A film',
    season: 9,
    network: 'ATM',
    data: '10.02.2017',
    premiere: moment('2017-2-10', 'YYYY-MM-DD').format('YYYY-MM-DD'),
    genresId: [GENRES_ID.TRAGEDY, GENRES_ID.CRIME]
  }
];


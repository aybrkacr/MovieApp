import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor(private logging: LoggingService) { }

  getMovies(): Observable<Movie[]> {
    this.logging.add("Movies called")
    return of(Movies);
  }
}

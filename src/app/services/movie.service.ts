import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Movies } from '../data-sources/movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMovies = 'api/movies';

  constructor(
    private logging: LoggingService,
    private http: HttpClient
    ) { }

  getMovies(): Observable<Movie[]> {
    this.logging.add("Movies called")
    return this.http.get<Movie[]>(this.apiMovies)
  }

  getMovieById(id: any): Observable<any> {
    this.logging.add("MovieService: get detail by id=" + id);
    return this.http.get<Movie>(this.apiMovies + '/' + id);
  }
}

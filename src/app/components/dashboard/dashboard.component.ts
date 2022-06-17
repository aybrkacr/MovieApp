import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/data-sources/movie.datasource';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  movieLenght: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => 
        {
         this.movies = movies.slice(0, 5);
         this.movieLenght = movies.length;
        })
  }

}

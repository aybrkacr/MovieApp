import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasource";
import { MovieService } from "../movie.service";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {

    title = "Movies List";
    movies: Movie[];
    selectedMovie: Movie;
    isSelected: boolean = false;

    constructor(private movieService: MovieService){}

    ngOnInit(): void{
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        
        this.selectedMovie = movie;

    }

    getMovies(): void {
        this.movies = this.movieService.getMovies();
    }
}
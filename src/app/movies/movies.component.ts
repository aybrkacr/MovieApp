import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasource";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {

    title = "Movies List";
    movies = Movies;
    selectedMovie: Movie;
    isSelected: boolean = false;

    onSelect(movie: Movie): void {
        if (this.isSelected) {
            this.isSelected = false;
        }
        else { this.isSelected = true; }
        this.selectedMovie = movie;
    }
}
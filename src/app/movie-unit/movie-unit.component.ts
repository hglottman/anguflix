import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../moviesService';
import { AllMoviesComponent } from '../all-movies/all-movies.component';


@Component({
  selector: 'app-movie-unit',
  templateUrl: './movie-unit.component.html',
  styleUrls: ['./movie-unit.component.scss']
})

export class MovieUnitComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();

  constructor(private moviesService: MoviesService, private allMoviesComponent: AllMoviesComponent) { }

  ngOnInit() {
  }

  buyMovie() {
    this.allMoviesComponent.addToSelectedMovies(this.movie);
    const newMovie = new Movie;
    this.movieAdded.emit(newMovie);
  }


}




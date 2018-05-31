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
  @Output() buttonOnClick: EventEmitter<Movie> = new EventEmitter();

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }


  buyMovie() {
    this.buttonOnClick.emit(this.movie);
  }
}





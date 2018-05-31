import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../moviesService';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { User } from '../user';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-movie-unit',
  templateUrl: './movie-unit.component.html',
  styleUrls: ['./movie-unit.component.scss']
})

export class MovieUnitComponent implements OnInit {

  // @Input() user: User;
  @Input() movie: Movie = new Movie();
  @Input() buttonText: String = '';
  @Output() buttonOnClick: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
      this.buttonOnClick.emit(this.movie);
  }

}





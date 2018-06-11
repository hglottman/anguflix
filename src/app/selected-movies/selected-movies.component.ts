import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviesService';
import { Movie } from '../movie';
import { fn } from '@angular/compiler/src/output/output_ast';
import { FilterComponent } from '../filter/filter.component';



@Component({
  selector: 'app-selected-movies',
  templateUrl: './selected-movies.component.html',
  styleUrls: ['./selected-movies.component.scss']
})

export class SelectedMoviesComponent implements OnInit {

  selectedMovies = new Array<Movie>();
  filterTerm: string;
  iconText = 'Remove';

  filter: Object = {};

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    // this.selectedMovies = this.moviesService.getSelectedMovies();
  }


  // removeMovie(movie) {
  //   this.moviesService.removeMovie(movie);
  // }


  buildFilters(filter) {
    this.filter = filter;
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';
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
  filterString: string;
  iconText = 'Remove';

  filter: Object = {};

  constructor(private moviesService: MoviesService, private userService: UserService) {
    this.userService.myMoviesObservable.subscribe((movies) => {
      this.selectedMovies = movies;
   });
  }

  ngOnInit() {
    this.selectedMovies = this.userService.getCollection();
  }


  // removeMovie(movie) {
  //   this.moviesService.removeMovie(movie);
  // }


  buildFilters(filter) {
    this.filter = filter;
  }

}

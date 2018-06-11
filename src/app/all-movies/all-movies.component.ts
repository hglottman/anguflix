import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviesService';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieUnitComponent } from '../movie-unit/movie-unit.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies = new Array<Movie>();
  filterTerm: string;
  searchText: string;


  constructor(private moviesService: MoviesService) {
    this.moviesService.moviesObservable.subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

//   addToSelectedMovies(movie) {
//   this.moviesService.addMovie(movie);
//   this.moviesService.updateBudget(movie);
// }

  onFilterChanged() {
    // this.router.navigate(['.'], { queryParams: { title: this.filterTerm }});
  }


}

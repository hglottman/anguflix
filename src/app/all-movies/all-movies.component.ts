import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';
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
  filterTerm: any;
  filterString: string;


  constructor(private moviesService: MoviesService, private userService: UserService) {
    this.moviesService.allMoviesObservable.subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }


  addToSelectedMovies(movie) {
  this.userService.addToCollection(movie);
  this.moviesService.removeMovie(movie);
}

  // onFilterChanged(any) {
  //   this.filterTerm = any;
  //   // this.router.navigate(['.'], { queryParams: { title: this.filterTerm }});
  // }

  getMovieFilter(filter) {
    this.moviesService.getMoviesByFilter(filter).subscribe( (movies) => {
     this.movies = movies;
   });
  }


}

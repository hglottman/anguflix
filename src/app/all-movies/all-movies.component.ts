import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviesService';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieUnitComponent } from '../movie-unit/movie-unit.component';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies = new Array<Movie>();
  filterTerm: string;


  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.movies = moviesService.getMovies();
   }

   ngOnInit() {
    // this.route.queryParams.subscribe(queryParams => {
    //   this.filterTerm = queryParams.title;
    // });
  }

  addToSelectedMovies(movie) {
  this.moviesService.addMovie(movie);
}


  onFilterChanged() {
    // this.router.navigate(['.'], { queryParams: { title: this.filterTerm }});
  }


}

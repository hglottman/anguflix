import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../moviesService';
import { Movie } from '../movie';


@Component({
  selector: 'app-selected-movies',
  templateUrl: './selected-movies.component.html',
  styleUrls: ['./selected-movies.component.scss']
})


export class SelectedMoviesComponent implements OnInit {


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }


  handleAddWalk() {
    this.moviesService.getMovies();
  }

}

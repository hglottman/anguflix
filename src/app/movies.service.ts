import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, Subscriber } from 'rxjs';


@Injectable()
export class MoviesService {

  allMovies: Array<Movie>;
  allMoviesSubject: Subject<Movie[]> = new Subject<Movie[]>();
  allMoviesObservable: Observable<Movie[]>;

  constructor(private http: HttpClient) {
    this.allMoviesObservable = this.allMoviesSubject.asObservable();
  }

  getMovies(): any {
    const observable = this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
    observable.subscribe((data) => {
      this.allMovies = data;
      this.allMoviesSubject.next(data);
    });
  }


  getMoviesByFilter(filter): Observable<any[]> {
    return this.http.get<any[]>('https://anguflix-api.herokuapp.com/api/movies?title=' + filter.title);
  }

    removeMovie(movie) {
      console.log(movie.id);
    this.http.delete<any[]>('https://anguflix-api.herokuapp.com/api/movies?id=' + movie.id);
    this.getMovies();

    const id: number = movie.id;

    // const existingMovieIndex = (myId) => {
    //   for (let i = 0; i < this.selectedMovies.length; i++) {
    //     if (this.selectedMovies[i].id === myId) {
    //       return i;
    //     }
    //   }
    // };

    // this.selectedMovies.splice(existingMovieIndex(id), 1);
    // this.user.budget += movie.price;
    // return this.selectedMovies;
  }


  // getSelectedMovies(): Movie[] {
  //   return this.selectedMovies;
  // }


//   addMovie(movie: Movie) {
//     movie.id = this.getSelectedMovies().length + 1;
//     this.selectedMovies.push(movie);
//   }


//   updateBudget(movie: Movie) {
//     this.user.budget -= movie.price;
//   }

// }
}

import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, Subscriber } from 'rxjs';





@Injectable()
export class MoviesService {

  movies: Array<Movie>;
  moviesSubject: Subject<Movie[]> = new Subject<Movie[]>();
  moviesObservable: Observable<Movie[]>;
  // selectedMovies: Array<Movie> = new Array<Movie>();
  user: User = new User();

  constructor(private http: HttpClient) {
    this.user.budget = 100;
    this.moviesObservable = this.moviesSubject.asObservable();
  }

  getMovies(): any {
    const observable = this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
    observable.subscribe((data) => {
      this.movies = data;
      this.moviesSubject.next(data);
    });
  }

  // getSelectedMovies(): Movie[] {
  //   return this.selectedMovies;
  // }

  getUser() {
    return this.user;
  }

//   addMovie(movie: Movie) {
//     movie.id = this.getSelectedMovies().length + 1;
//     this.selectedMovies.push(movie);
//   }

//   removeMovie(movie: Movie) {
//     const id: number = movie.id;

//     const existingMovieIndex = (myId) => {
//       for (let i = 0; i < this.selectedMovies.length; i++) {
//         if (this.selectedMovies[i].id === myId) {
//           return i;
//         }
//       }
//     };

//     this.selectedMovies.splice(existingMovieIndex(id), 1);
//     this.user.budget += movie.price;
//     return this.selectedMovies;
//   }

//   updateBudget(movie: Movie) {
//     this.user.budget -= movie.price;
//   }

// }
}

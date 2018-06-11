import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, Subscriber } from 'rxjs';


@Injectable()
export class UserService {

    myMovies: Movie[] = new Array<Movie>();
    myUser: User = { budget: 100, moviesCollection: this.myMovies };
    myMoviesSubject: Subject<Movie[]> = new Subject<Movie[]>();
    myMoviesObservable: Observable<Movie[]>;

    constructor(private http: HttpClient) {
        this.myMoviesObservable = this.myMoviesSubject.asObservable();
    }

    getCollection() {
        this.myMoviesSubject.next(this.myMovies);
        return this.myMovies;
    }
    getUser() {
        return this.myUser;
    }


    addToCollection(movie: Movie) {
        if (this.myUser.budget - movie.price >= 0) {
            console.log(this.myUser.budget);
            this.myMovies.push(movie);
            this.myUser.budget -= movie.price;
        }
    }
}

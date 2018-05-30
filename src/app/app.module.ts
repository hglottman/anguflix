import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedMoviesComponent } from './selected-movies/selected-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { BudgetComponent } from './budget/budget.component';
import { TitleFilterComponent } from './title-filter/title-filter.component';
import { YearFilterComponent } from './year-filter/year-filter.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { MoviesService } from './moviesService';
import { MovieUnitComponent } from './movie-unit/movie-unit.component';



const appRoutes: Routes = [
  { path: 'all-movies', component: AllMoviesComponent },
  { path: 'selected-movies', component: SelectedMoviesComponent },
  { path: '', redirectTo: '/all-movies', pathMatch: 'full'},
  { path: '**', redirectTo: '/all-movies', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedMoviesComponent,
    AllMoviesComponent,
    BudgetComponent,
    TitleFilterComponent,
    YearFilterComponent,
    DeleteMovieComponent,
    MovieUnitComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

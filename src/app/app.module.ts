import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedMoviesComponent } from './selected-movies/selected-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { FilterComponent } from './filter/filter.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { MoviesService } from './movies.service';
import { UserService } from './user.service';
import { MovieUnitComponent } from './movie-unit/movie-unit.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  { path: 'all-movies', component: AllMoviesComponent },
  { path: 'selected-movies', component: SelectedMoviesComponent },
  { path: '', redirectTo: '/all-movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/all-movies', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedMoviesComponent,
    AllMoviesComponent,
    FilterComponent,
    DeleteMovieComponent,
    MovieUnitComponent,
    FilterPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [MoviesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

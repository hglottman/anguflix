import { Injectable } from '@angular/core';
import { Movie } from './movie';

const MOVIES =  [
    {id: 0, img: 'http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg',
     title: 'The Lion King', price: 10, year: 1994, descrShort: 'A young lion Prince is cast out of his pride by his cruel uncle,' +
      'who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah,' +
      ' living by a philosophy: No worries for the rest of your days.'},
    {id: 1, img: 'http://static1.purepeople.com/articles/3/54/77/3/@/401371-des-images-de-titanic-de-james-cameron-950x0-2.jpg',
     title: 'Titanic', price: 12, year: 1997, descrShort: 'Titanic is a 1997 American epic romance-disaster film directed, written,' +
     'co-produced and co-edited by James Cameron. A fictionalized account of the sinking of the RMS Titanic, it stars Leonardo DiCaprio' +
     ' and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.'},
    {id: 2, img: 'https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
     title: 'Avatar', price: 16, year: 2009, descrShort: 'The film is set in the mid-22nd century, when humans are colonizing Pandora,' +
    ' a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium,' +
    ' a room-temperature superconductor. The expansion of the mining colony threatens the continued existence of a local tribe of Navi' +
    ' – a humanoid species indigenous to Pandora.'},
    {id: 3, img: 'https://usercontent2.hubstatic.com/13349231_f520.jpg', title: 'The Dark Knight', price: 20, year: 2008,
    descrShort: 'In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney' +
    ' Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by a criminal mastermind' +
    ' known as the Joker (Ledger) who seeks to undermine Batmans influence and create chaos.'},
    {id: 4, img: 'https://cdn.eventcinemas.com.au/cdn/resources/movies/11862/images/largeposter.jpg', title: 'Deadpool 2', price: 20,
     year: 2018, descrShort: 'Deadpool 2 is a 2018 American superhero film based on the Marvel Comics character Deadpool, distributed' +
     ' by 20th Century Fox. It is the eleventh installment in the X-Men film series, and a direct sequel to the 2016 film Deadpool.' +
     ' The film is directed by David Leitch from a script by Rhett Reese, Paul Wernick, and Ryan Reynolds, with Reynolds starring' +
     ' in the title role alongside Josh Brolin, Morena Baccarin, Julian Dennison, Zazie Beetz, T.J. Miller, Brianna Hildebrand,' +
     ' and Jack Kesy. In the film, Deadpool forms the team X-Force to protect a young mutant from the time-traveling soldier Cable.'},
    {id: 5, img: 'http://intl.filmfund.org.il/movies_images/003938/003938_1.jpg', title: 'Doubtful', price: 18, year: 2018,
     descrShort: 'Following a motorcycle accident, Assi (Ran Danker), screenwriter and poet from Tel Aviv, sentence to community service' +
     ' as a cinema teacher in a development town in southern Israel. His student are a juvenile delinquency. At the beginning,' +
     ' Assi find it difficult to communicate with the boys, but due to his uncompromising efforts, he paved a way to their heart.' +
     ' Assi develop close relationship with Eden (Adar Hazazi Gersch), young man who collect bottles for recycling in order' +
     ' to fulfill a dream. Assi try to help Eden break through the boundaries of his life.'}
  ];

  const SELECTEDMOVIES = [];


  @Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Movie[] {
    return SELECTEDMOVIES;
  }

  // getMovie(id: number) {
  //   return this.getMovie(id).find((movie) => movie.id === id);
  // }

  addMovie(movie: Movie) {
    movie.id = this.getMovies().length + 1;
    SELECTEDMOVIES.push(movie);
  }

  // updateDog(id: number, dog:Dog) {
  //   const existingDogIndex = this.getDogs().findIndex((dog) => dog.id == id);
  //   DOGS[existingDogIndex] = dog;
  // }

  // addWalk(dog, walk) {
  //   dog.walks.push(walk);
  //   console.log(DOGS)
  // }

}



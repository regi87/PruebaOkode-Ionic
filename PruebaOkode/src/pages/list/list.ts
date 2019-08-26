import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiMovieMovieProvider } from './../../providers/api-movie-movie/api-movie-movie'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, movie_service:ApiMovieMovieProvider) {

   console.log("LLAMADA");
   movie_service.getMovies().subscribe(
       (res: HttpResponse<any>) => this.setMovies(res),
       (res: HttpErrorResponse) => console.log(res.message)
   );
   console.log (movie_service.getMovies());
    this.items = [];
  }

  /**
   * Set array with movies
   */

   setMovies(_movies){
     this.items = _movies.results;
     console.log(this.items);
   }

}

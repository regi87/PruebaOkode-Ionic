import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiMovieProvider } from '../../providers/api-movie/api-movie';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  protected image_base_url: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public movie_service: ApiMovieProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    this.image_base_url = movie_service.getImageUrl();

    movie_service.getMovies().subscribe(
      (res: HttpResponse<any>) => this.setMovies(res),
      (res: HttpErrorResponse) => console.log(res.message)
  );
  }


  /**
   * Set array with movies
   */

  setMovies(_movies){
    this.items = _movies.results;
    console.log(this.items);
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MovieDetailPage, {
      item: item,
      base_image_url: this.image_base_url 
    });
  }
}

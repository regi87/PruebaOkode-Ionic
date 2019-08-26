import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiMovieMovieProvider } from './../../providers/api-movie-movie/api-movie-movie'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { PagesMovieDetailPage } from '../pages-movie-detail/pages-movie-detail';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<any>;
  protected image_base_url: string;

  constructor(public navCtrl: NavController,  public navParams: NavParams, private movie_service:ApiMovieMovieProvider) {

      this.items = [];
      this.image_base_url = movie_service.getImageUrl();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movie_service.getMovies().subscribe(
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

   /**
    * Select Movie to see more
    */
   movieSelect(_movie){
     console.log(_movie);
     this.navCtrl.push(PagesMovieDetailPage)
   }

}

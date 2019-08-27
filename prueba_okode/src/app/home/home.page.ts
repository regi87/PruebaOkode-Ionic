import { Component } from '@angular/core';
import { MovieService } from '../api/movie.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Array<{ title: string, note: string, icon: string }>;
  protected image_base_url: string;

  constructor(public movie_service: MovieService, private router: Router, public navCtrl: NavController) {
    this.items = [];

    this.image_base_url = movie_service.getImageUrl();

    movie_service.getMovies().subscribe(
      (res: HttpResponse<any>) => this.setMovies(res),
      (res: HttpErrorResponse) => console.log(res.message)
    );
  }


  /**
   * Set array with movies
   * @param _movies Array movies info 
  */
  setMovies(movies) {
    this.items = movies.results;
    console.log(this.items);
  }

  /**
   * Pass parameter to movie-detail
   * @param event 
   * @param item Card selected to see detail
   */

  itemTapped(event, item) {
    // data to pass    
    let data = {
      'item': item,
      'image_url': this.image_base_url
    };

    this.router.navigate(['/movie-detail'], {
      queryParams:
      {
        value: JSON.stringify(data),

      }
    });

  }

}

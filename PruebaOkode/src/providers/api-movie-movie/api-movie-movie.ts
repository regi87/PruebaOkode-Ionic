import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';
import { c } from '@angular/core/src/render3';

/*
  Generated class for the ApiMovieMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiMovieMovieProvider {

  private api_key= 'ec1df9693e4c3489213b610d87c93101';
  private base_url= 'https://api.themoviedb.org/3';
  private query = '/discover/movie?';
  private base_image_url = 'https://image.tmdb.org/t/p/w500/';

  constructor(private http: HttpClient) {
  }

 /**
  * Get Movies from API
  * @param {} 
  * return Array Api
  */

 getMovies(): Observable<any> {  
    return this.http.get(this.base_url + this.query + this.api_key );
  }

/**
 * GetImage base URL
 * @params {}
 * return base URL Image
 */
  getImageUrl(){
    return this.base_image_url;
  }


 
}

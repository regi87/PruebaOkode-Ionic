import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ApiMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiMovieProvider {

  private api_key= 'ec1df9693e4c3489213b610d87c93101';
  private base_url= 'https://api.themoviedb.org/3';
  private query = '/discover/movie?';
  private base_image_url = 'https://image.tmdb.org/t/p/w500/';


  constructor(public http: HttpClient) {
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

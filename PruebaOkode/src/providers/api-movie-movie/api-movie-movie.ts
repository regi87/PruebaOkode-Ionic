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

  constructor(private http: HttpClient) {
  }

 /**
  * Get Movies from API
  * @param {} 
  */

 getMovies(): Observable<any> {  
    return this.http.get(this.base_url + this.query + this.api_key );
  }
  


 
}

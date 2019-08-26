import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  protected movie:any;
  protected base_image_url:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ngOnInit() {
    console.log('ionViewDidLoad MovieDetailPage');

    this.movie = this.navParams.data.item;
    this.base_image_url = this.navParams.data.base_image_url;
    console.log("MOVE");
    console.log(this.movie.title);
  }

}

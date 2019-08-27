import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie:{};
  
  constructor(private activatedroute: ActivatedRoute) { 
    //Get data info movie from home.ts
    this.activatedroute.queryParams.subscribe((res)=>{
      this.movie = JSON.parse(res['value']);
    });
  
  }

  ngOnInit() {
  }

}

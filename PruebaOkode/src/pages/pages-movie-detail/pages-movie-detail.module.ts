import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesMovieDetailPage } from './pages-movie-detail';

@NgModule({
  declarations: [
    PagesMovieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesMovieDetailPage),
  ],
})
export class PagesMovieDetailPageModule {}

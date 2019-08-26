import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiMovieProvider } from '../providers/api-movie/api-movie';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiMovieProvider
  ]
})
export class AppModule {}

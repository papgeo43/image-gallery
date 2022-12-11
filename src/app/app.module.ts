import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { usplashRandomPhoto } from './tokens/unsplash-api';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImagePreviewComponent } from './image-gallery/image-preview/image-preview.component';
import { AddToFavoritesComponent } from './image-gallery/add-to-favorites/add-to-favorites.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InfiniteScrollComponent } from './infinive-scroll/infinive-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImagePreviewComponent,
    AddToFavoritesComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: usplashRandomPhoto, useValue:`https://api.unsplash.com/photos/random?client_id=ysrlO6GJoG5ttWMLz1vi5OQyyH-GOw_PPjWvOWeTcEs&count=6`},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

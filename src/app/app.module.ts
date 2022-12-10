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
@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImagePreviewComponent,
    AddToFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: usplashRandomPhoto, useValue:`https://api.unsplash.com/photos/random?client_id=K41HZvzXsJtEyqMOYf78_7H9neKGvw6P1l5ideix7hY&count=6`},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { usplashRandomPhotoApi } from './tokens/unsplash-api';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImagePreviewComponent } from './image-gallery/image-preview/image-preview.component';
import { AddToFavoritesComponent } from './image-gallery/add-to-favorites/add-to-favorites.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImagePreviewComponent,
    AddToFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: usplashRandomPhotoApi,
      useValue: `https://api.unsplash.com/photos/random?client_id=n5VUEJhRQXtoRNvjcNOjlcjbFiFRWGm2i-UQgcxbvE8&count=6`,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

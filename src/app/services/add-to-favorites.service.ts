import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteImage } from '../models/image';
import { FetchImagesService } from './fetch-images.service';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {
  favoritesList: FavoriteImage[] = [];
  constructor(private fetchImagesService: FetchImagesService, private _snackBar: MatSnackBar) { }


  addToFavorites(favoriteImage: FavoriteImage){
    const isImageAreadyInFavorites = this.findClickedImage(favoriteImage);
    if(isImageAreadyInFavorites){
      this._snackBar.open('Image is already saved', 'Close', {
        duration: 1000
      });
      return;
    }
    this.favoritesList = [favoriteImage];
  }

  removeImageFromFavorites(image:FavoriteImage){
    const favImg = this.findClickedImage(image);
    const updateList = this.favoritesList.filter(img => img.id !== favImg?.id);
    return this.favoritesList = [...updateList];
  };

  findClickedImage(image: FavoriteImage){
    const img = this.favoritesList.find(favImg => favImg.id === image.id);
    return img;
  }

  trackImageToPreview(image: FavoriteImage){
    const favImage = this.findClickedImage(image); 
    if(favImage){
      this.fetchImagesService.trackImageForPreview = {...favImage};
    }
  }

}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { FavoriteImage, Image } from '../models/image';
import { FetchImagesService } from './fetch-images.service';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {
  favoritesList: FavoriteImage[] = [];
  constructor(private fetchImagesService: FetchImagesService, private _snackBar: MatSnackBar) { }


  addToFavorites(favoriteImage: any){
    const isImageAreadyInFavorites = this.findClickedImage(favoriteImage);
    if(isImageAreadyInFavorites){
      this._snackBar.open('Image is already saved', 'Close', {
        duration: 1000
      });
      return;
    }
    this.favoritesList.push(favoriteImage);
  }

  removeImageFromFavorites(image:FavoriteImage){
    const favImg = this.findClickedImage(image);
    const updateList = this.favoritesList.filter(img => img.id !== favImg?.id);
    return this.favoritesList = [...updateList]
  };

  findClickedImage(image: FavoriteImage){
    const img = this.favoritesList.find(favImg => favImg.id === image.id);
    return img;
  }

  trackImageToPreview(image: FavoriteImage){
    debugger
    const favImage = this.findClickedImage(image); 
    if(favImage){
      this.fetchImagesService.trackImageForPreview = {...favImage}
    }
  }

}

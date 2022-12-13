import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteImage } from '../models/image';
import { FetchImagesService } from './fetch-images.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesService {
  trackImageForPreview: FavoriteImage;
  favoritesList: FavoriteImage[] = [];
  constructor(
    private fetchImagesService: FetchImagesService,
    private _snackBar: MatSnackBar,
    private _notificationService: NotificationService
  ) {}

  addToFavorites(favoriteImage: FavoriteImage) {
    const isImageAlredyInFavorites =
      this.isClickedImageToFavorites(favoriteImage);
    if (isImageAlredyInFavorites) {
      this._notificationService.imageIsAlreadyInFavoritesNotification();
    } else {
      this._notificationService.addedToFavoritesNotification();
      this.favoritesList.push(favoriteImage);
    }
  }

  removeImageFromFavorites(image: FavoriteImage) {
    const favImg = this.isClickedImageToFavorites(image);
    const updateList = this.favoritesList.filter(
      (img) => img.id !== favImg?.id
    );
    this._notificationService.removeFromFavoritesNotification();
    return (this.favoritesList = [...updateList]);
  }

  isClickedImageToFavorites(image: FavoriteImage) {
    return this.favoritesList.find((favImg) => favImg.id === image.id);
  }

  trackImageToPreview(image: FavoriteImage) {
    const favImage = this.isClickedImageToFavorites(image);
    if (favImage) {
      this.trackImageForPreview = { ...favImage };
    }
  }
}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FetchImagesService } from 'src/app/services/fetch-images.service';
import { Image } from '../../models/image';
import { AddToFavoritesComponent } from '../add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImagePreviewComponent {
  imageForPreview = { ...this._addToFavoritesService.trackImageForPreview };
  isImageInFavorites = this._addToFavoritesService.isClickedImageToFavorites(
    this.imageForPreview
  );

  constructor(
    private _addToFavoritesService: AddToFavoritesService,
    private _router: Router
  ) {}

  addToFavorites() {
    this._addToFavoritesService.addToFavorites(this.imageForPreview);
  }

  removeImageFromFavorites() {
    this._addToFavoritesService.removeImageFromFavorites(this.imageForPreview);
    this.navigateToFavoritesAfterRemoval();
  }

  navigateToFavoritesAfterRemoval() {
    this._router.navigate(['/favorites']);
  }

  imageToPreview() {
    this._addToFavoritesService.trackImageToPreview(this.imageForPreview);
  }
}

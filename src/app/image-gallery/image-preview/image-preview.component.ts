import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FetchImagesService } from 'src/app/services/fetch-images.service';
import {Image} from '../../models/image'
import { AddToFavoritesComponent } from '../add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ImagePreviewComponent {
   
 constructor(private _fetchImagesService: FetchImagesService, private _addToFavorites: AddToFavoritesService, private _snackBar: MatSnackBar, private _router: Router) { }
  
  imageForPreview = {...this._fetchImagesService.trackImageForPreview};
  isImageInFavorites = this._addToFavorites.findClickedImage(this.imageForPreview);
  
  addToFavorites(){
    this._snackBar.open('Saved to favorites', 'Close', {
      panelClass: 'green-snackbar',
      duration: 1000
    });
    this._addToFavorites.addToFavorites(this.imageForPreview);
  }

  removeImageFromFavorites(){
    this._addToFavorites.removeImageFromFavorites(this.imageForPreview);
    this.navigateToFavoritesAfterRemoval();
  }

  navigateToFavoritesAfterRemoval(){
    this._router.navigate(['/favorites']);
  }

  imageToPreview(){
    this._addToFavorites.trackImageToPreview(this.imageForPreview)
  }

  

  

}

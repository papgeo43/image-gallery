import { Component, Input, OnInit } from '@angular/core';
import { FetchImagesService } from 'src/app/services/fetch-images.service';
import {Image} from '../../models/image'
import { AddToFavoritesComponent } from '../add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
   
 constructor(private _fetchImagesService: FetchImagesService, private _addToFavorites: AddToFavoritesService) { }
  
  imageForPreview = this._fetchImagesService.trackImageForPreview;
  
  ngOnInit(): void {
  }

  addToFavorites(){
    this._addToFavorites.addToFavorites(this.imageForPreview);
  }

  

}

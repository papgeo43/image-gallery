import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToFavoritesService } from 'src/app/services/add-to-favorites.service';
import { FavoriteImage } from '../../models/image';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  constructor(private _addToFavoritesService: AddToFavoritesService, private _router: Router) { }
  favoritesList = [...this._addToFavoritesService.favoritesList]
  ngOnInit(): void {
  }

  navigateToPreview(src: string, id: string){
    this._router.navigate(['/photos', id]);
    this.setSelectedImage({src: src, id: id});
  }

  setSelectedImage(image: FavoriteImage){
    this._addToFavoritesService.trackImageToPreview(image)
  }

}

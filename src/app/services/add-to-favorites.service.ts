import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {
  favoritesList$ = new BehaviorSubject<string[]>([]);
  constructor() { }


  addToFavorites(favoriteImage:string){
    const currentList = this.favoritesList$.value;
    const updatedList = [...currentList, favoriteImage]
    this.favoritesList$.next(updatedList)
  }
}

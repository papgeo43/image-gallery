import { Inject, Injectable } from '@angular/core';
import { usplashRandomPhotoApi } from '../tokens/unsplash-api';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Image, FavoriteImage } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class FetchImagesService {
  imagesForGallery:Image[] = []
  constructor(@Inject(usplashRandomPhotoApi) private _usplashRandomPhotoApi: string, private http: HttpClient) { }

  fetchImages(): Observable<Image[]>{
   return this.http.get<Image[]>(`${this._usplashRandomPhotoApi}`).pipe(
     tap((imagesList) => this.imagesForGallery = [...this.imagesForGallery, ...imagesList]),
     delay(200),
     catchError((err)=>{
       console.log(err)
       return of([])
     })
   )
  }
}

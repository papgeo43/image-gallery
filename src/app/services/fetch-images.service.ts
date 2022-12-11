import { Inject, Injectable } from '@angular/core';
import { usplashRandomPhoto } from '../tokens/unsplash-api';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Image, FavoriteImage } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class FetchImagesService {
  trackImageForPreview : FavoriteImage;
  imagesForGallery:Image[] = []
  constructor(@Inject(usplashRandomPhoto) private _usplashRandomPhoto: string, private http: HttpClient) { }

  fetchImages(): Observable<Image[]>{
   return this.http.get<Image[]>(`${this._usplashRandomPhoto}`).pipe(
     tap((imagesList) => this.imagesForGallery = [...this.imagesForGallery,...imagesList]),
     delay(200),
     catchError((err)=>{
       console.log(err)
       return of([])
     })
   )
  }
}

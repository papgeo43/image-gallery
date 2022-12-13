import { Inject, Injectable } from '@angular/core';
import { usplashRandomPhotoApi } from '../tokens/unsplash-api';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Image, FavoriteImage } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class FetchImagesService {
  imagesForGallery: Image[] = [];
  loading$ = new BehaviorSubject<boolean>(false);
  constructor(
    @Inject(usplashRandomPhotoApi) private _usplashRandomPhotoApi: string,
    private http: HttpClient
  ) {}

  fetchImages(): Observable<Image[]> {
    this.loading$.next(true);
    return this.http.get<Image[]>(`${this._usplashRandomPhotoApi}`).pipe(
      tap((imagesList) => {
        this.imagesForGallery = [...this.imagesForGallery, ...imagesList];
      }),
      delay(300),
      catchError((err) => {
        console.log(err);
        return of([]);
      }),
      finalize(() => this.loading$.next(false))
    );
  }
}

import { Inject, Injectable } from '@angular/core';
import { usplashRandomPhoto } from '../tokens/unsplash-api';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import {Image} from '../models/image'

@Injectable({
  providedIn: 'root'
})
export class FetchImagesService {
  images$ = new Subject<Image[]>();
  
  constructor(@Inject(usplashRandomPhoto) private _usplashRandomPhoto: string, private http: HttpClient) { }

  fetchImages(): Observable<Image[]>{
   return this.http.get<Image[]>(`${this._usplashRandomPhoto}`).pipe(
    tap((img)=>{
      this.images$.next([...img])
    }),
     catchError((err)=>{
       console.log(err)
       return of([])
     })
   )
  }

  calculateImageWidth(imageArray: Image[]){
   imageArray.map(image => {

   })
  }
}

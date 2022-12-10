import { Component, OnInit } from '@angular/core';
import { FetchImagesService } from './services/fetch-images.service';
import { Observable, Subject } from 'rxjs';
import { Image } from './models/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {
  title = 'photo-gallery';
 
}


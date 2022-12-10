import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchImagesService } from '../services/fetch-images.service';
import {Image} from '../models/image'
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  //images$ : Observable<Image[]> ;
  images: Image[] = []
  constructor(private _fetchImagesService: FetchImagesService) {  }

  ngOnInit() {
    
  }

  openPreview(id: string){
    console.log(id,"clicked")
  }
  
  o(){
    this._fetchImagesService.fetchImages().subscribe(newImages => {
      this.images = [...this.images, ...newImages]
    });
  }

  imageById(index:any, item:any ){
    return item.id;
  }

}

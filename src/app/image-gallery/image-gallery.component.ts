import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchImagesService } from '../services/fetch-images.service';
import {Image} from '../models/image'
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  
  images: Image[] = [];
  constructor(private _fetchImagesService: FetchImagesService, private router: Router) {  }
 
  ngOnInit() {
    // this._fetchImagesService.fetchImages().subscribe(newImages => {
    //     this.images = [...this.images, ...newImages]
    // })
  }

  openPreview(id: string, imageUrl: string){
    this._fetchImagesService.trackImageForPreview = {src: imageUrl, id: id};
    this.router.navigate(['/photos', id]);
  }

  imageById(index:any, item:any ){
    return item.id;
  }

  onScroll(){
    console.log('deb')
      this._fetchImagesService.fetchImages().subscribe(newImages => {
        this.images = [...this.images, ...newImages]
      })
  }


}

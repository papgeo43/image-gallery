import { Component } from '@angular/core';
import { FetchImagesService } from '../services/fetch-images.service';
import {Image} from '../models/image'
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
  images: Image[] = [...this._fetchImagesService.imagesForGallery];
  constructor(private _fetchImagesService: FetchImagesService, private router: Router) {  }

  openPreview(id: string, imageUrl: string){
    this._fetchImagesService.trackImageForPreview = {src: imageUrl, id: id};
    this.router.navigate(['/photos', id]);
  }

  imageById(index:any, item:any ){
    return item.id;
  }

  onScroll(){
    this._fetchImagesService.fetchImages().subscribe(newImages => {
      this.images = [...this.images, ...newImages]
      window.scrollTo({top: 0, behavior: 'smooth'});
    })
  }


}

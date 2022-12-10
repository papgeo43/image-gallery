import { Component, Input, OnInit } from '@angular/core';
import {Image} from '../../models/image'
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
 @Input() image: Image
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AddToFavoritesComponent } from './image-gallery/add-to-favorites/add-to-favorites.component';
import { ImagePreviewComponent } from './image-gallery/image-preview/image-preview.component';

const routes: Routes = [
  {path:'', component:ImageGalleryComponent},
  {path:'favorites', component:AddToFavoritesComponent},
  {path:'photos/:id', component:ImagePreviewComponent},
  {path:'**',component: ImageGalleryComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

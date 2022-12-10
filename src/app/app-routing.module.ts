import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AddToFavoritesComponent } from './image-gallery/add-to-favorites/add-to-favorites.component';

const routes: Routes = [
  {path:'', component:ImageGalleryComponent},
  {path:'favorites', component:AddToFavoritesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

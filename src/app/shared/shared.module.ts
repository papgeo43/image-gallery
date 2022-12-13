import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from '../infinive-scroll/infinive-scroll.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InfiniteScrollComponent],
  exports: [InfiniteScrollComponent],
})
export class SharedModule {}

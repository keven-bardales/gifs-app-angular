import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LucideAngularModule, Search } from 'lucide-angular';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifComponentComponent } from './components/gif-component/gif-component.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifComponentComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ Search }),
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }




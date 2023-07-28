import { Component } from '@angular/core';
import { GifServiceService } from '../../services/gif-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor (private gifService : GifServiceService){

  }

  get tagHistory () {
    return [...this.gifService.tagsHistory]
  }

  get fullGifList () {
    return this.gifService.gifs
  }



}

import { Component } from '@angular/core';
import { GifServiceService } from 'src/app/gifs/services/gif-service.service';

@Component({
  selector: 'shared-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor (private gifService : GifServiceService){

  }

  get historyOfSearchs () {
    return [...this.gifService.tagsHistory]
  }

  searchFromHistory(tag:string) {
    this.gifService.searchTag(tag)
  }
}

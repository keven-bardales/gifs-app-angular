import { Component, Input } from '@angular/core';
import { GifServiceService } from '../../services/gif-service.service';
import { GifsInterface } from '../../interfaces/gifs-interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  constructor (){

  }

  @Input('gifListInitialized')
  tagHistory: string [] = []

  @Input('publicGifList')
  public gifs: GifsInterface[] = []

  // gifList: GifsInterface[] = []

  // get gifList () {
  //   return [...this.fullGifList.gifs]
  // }
}

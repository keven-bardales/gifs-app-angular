import { Component, Input, OnInit } from '@angular/core';
import { GifsInterface } from '../../interfaces/gifs-interface';

@Component({
  selector: 'app-gif-component',
  templateUrl: './gif-component.component.html'
})
export class GifComponentComponent implements OnInit {

  @Input('individualGif')
  gif!: GifsInterface 

  ngOnInit(): void {
    if(!this.gif){
      throw new Error('Gif property is required')
    }
  }
}

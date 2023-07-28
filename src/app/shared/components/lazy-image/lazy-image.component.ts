import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!:string

  private _hasLoaded: boolean = false

  get hasLoaded (): boolean {
    return this._hasLoaded
  }

  ngOnInit(): void {
    if(!this.url){
      throw new Error('not implemented')
    }
  }

  onLoad():void {
    console.log('Has Loaded')
    this._hasLoaded = true
  }

}

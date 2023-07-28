import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifServiceService } from '../../services/gif-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  
  constructor(private gifService : GifServiceService) {

  }

  // view child para referencial local del elemento html

  @ViewChild('txtTagInput')



  // tipado de la referencia al input html
  tagInput!: ElementRef<HTMLInputElement>
  
  searchTag() {

    // obtenemos el valor accediendo al view child definido antes

    const newTag = this.tagInput.nativeElement.value
    this.gifService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''

  }
}

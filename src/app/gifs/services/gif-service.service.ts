import { Injectable } from '@angular/core';
import { GifsInterface } from '../interfaces/gifs-interface';
import {HttpClient, HttpParams} from '@angular/common/http'
import { ResponseGifs } from '../interfaces/gifs-interface';

const GIPHY_API_KEY = 'ULoCb0WLHIeXZ9wK9OuI02xL9tNPf3FW'

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {

  constructor(private http: HttpClient) {
    this.loadLocalStorage()
  }

  private _tagsHistory:   string [] = []
  public _gifs: GifsInterface[] = []
  private GIPHY_API_KEY:  string  = GIPHY_API_KEY
  private SERVICE_URL:    string = 'https://api.giphy.com/v1/gifs'


  // las mutaciones se hacen unicamente en el servicio  con el getter evitamos esto

  get tagsHistory () {
    // evitamos la referencia de javascript
    return [...this._tagsHistory]
  }

  get gifs () {
    return [...this._gifs]
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase()

    // const isTagInHistory: boolean = this._tagsHistory.some((item) => item.toLowerCase() === tag)
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag.toLowerCase() !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)

    this.saveLocalStorage()
  }

  private saveLocalStorage():void {
    localStorage.setItem('searchHistory',JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void {
    if(!localStorage.getItem('searchHistory')) return

    this._tagsHistory = JSON.parse(localStorage.getItem('searchHistory')!) // not null assersion operator
    if(this._tagsHistory.length === 0) return
    this.searchTag(this._tagsHistory[0])     
  }

  setGifs (newGifs: GifsInterface[]) {
      this._gifs = newGifs
  }

  searchTag(tag: string) {
    if(!tag) return


    this.organizeHistory(tag)
    
    // const response = await fetch(`https://api.giphy.com/v1/gifs/search?t&api_key=ULoCb0WLHIeXZ9wK9OuI02xL9tNPf3FW&q=${tag}&limit=10`)
    // const data = await response.json()

    const params = new HttpParams()
    .set('api_key', this.GIPHY_API_KEY)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<ResponseGifs>(`${this.SERVICE_URL}/search`, {params})
    .subscribe((resp ) => {
      this.setGifs(resp.data)
    })




  }

}

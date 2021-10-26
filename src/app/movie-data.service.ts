import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  baseUrl = 'http://api.themoviedb.org/';
  nowPlayingDBPromise: Promise<any>;
  nowPlayingUrl = '3/movie/now_playing';

  constructor() { 
    this.nowPlayingDBPromise = fetch(`${this.baseUrl}3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`)
      .then( d => d.json());
  }




}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MovieDataService {
  dbPromise: Promise<any>;

  constructor() { 
    this.dbPromise = fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
      .then( d => d.json());
  }


}

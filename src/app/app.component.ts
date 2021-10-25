import { Component } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieDataService]
})
export class AppComponent {
}

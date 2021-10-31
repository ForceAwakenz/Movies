import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { MovieDataService } from 'src/app/shared/services/movie-data.service';

type INumberTrio = [number, number, number];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{
  @Input() pagesTotal: number = 10;
  currentPage: number = 1;
  pageNumberTrio: INumberTrio = [1, 2, 3];

  constructor(private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = +params.page || this.currentPage;
      this.pageNumberTrio = this.constructNumberTrio(this.currentPage, this.pagesTotal);
    });
  }

  constructNumberTrio(toPage: number, pagesTotal: number): INumberTrio  {
    if (!this.existsIn(toPage - 1, pagesTotal)) {
      toPage++;
    }
    if (!this.existsIn(toPage + 1, pagesTotal)) {
      toPage--;
    }
    return [ toPage - 1 , toPage, toPage + 1];
  }

  existsIn(targetNumber: number, inRange: number): boolean {
    return  targetNumber >= 1 && targetNumber <= inRange;
  }

}

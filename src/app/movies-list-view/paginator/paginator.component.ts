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
      this.renderPaginator(this.currentPage, this.pagesTotal);
    });
  }

  renderPaginator(toPage: number, pagesTotal: number): void  {
    let trioShifter = 0;
    if (!this.existsIn(toPage - 1, pagesTotal)) {
      trioShifter++;
    }
    if (!this.existsIn(toPage + 1, pagesTotal)) {
      trioShifter--;
    }
    let currentPosition = toPage + trioShifter;
    this.pageNumberTrio = [ currentPosition - 1 , currentPosition, currentPosition + 1];
    console.log(this.pageNumberTrio);
  }

  existsIn(targetNumber: number, inRange: number): boolean {
    return ( targetNumber >= 1 && targetNumber <= inRange) ? true : false;
  }

}

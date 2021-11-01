import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

type INumberTrio = [number, number, number];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{
  @Input() pagesTotal: number;
  @Input() currentPage: number;

  pageNumberTrio: INumberTrio = [1, 2, 3];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    if (!this.currentPage) {
      this.changePage(1);
    }
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = +params.page;
      if (this.pagesTotal) {
        this.pageNumberTrio = this.constructNumberTrio(this.currentPage, this.pagesTotal);
      }
    });
  }

  existsIn(targetNumber: number, inRange: number): boolean {
    return  targetNumber >= 1 && targetNumber <= inRange;
  }

  changePage(moveToPage: number): void {
    this.currentPage = moveToPage;
    this.router.navigate(['/movies'], {queryParams: {'page': moveToPage}});
  }

  private constructNumberTrio(toPage: number, pagesTotal: number): INumberTrio {
    if (!this.existsIn(toPage - 1, pagesTotal)) {
      toPage++;
    }
    if (!this.existsIn(toPage + 1, pagesTotal)) {
      toPage--;
    }
    return [ toPage - 1 , toPage, toPage + 1];
  }

}

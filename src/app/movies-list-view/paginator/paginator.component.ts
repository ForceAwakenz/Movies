import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

type INumberTrio = [number, number, number];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{
  @Input() pagesTotal: number = 10;
  @Input() currentPage: number = 1;

  pageNumberTrio: INumberTrio = [1, 2, 3];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
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

  changePage(moveToPage: number): void {
    this.currentPage = moveToPage;
    this.router.navigate(['/movies'], {queryParams: {'page': moveToPage}});
  }

}

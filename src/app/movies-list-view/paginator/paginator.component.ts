import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { map } from 'rxjs/operators';

type INumberTrio = [number, number, number];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pagesTotal: number;
  @Input() currentPage: number;
  @Output() pageChanged = new EventEmitter<number>();

  pageNumberTrio: INumberTrio;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(
      map((params: Params) => +params.page || 1)
    ).subscribe((page: number) => {
      this.currentPage = page;
      this.pageNumberTrio = this.constructNumberTrio(page, this.pagesTotal);
    });
  }

  existsIn(targetNumber: number, inRange: number): boolean {
    return  targetNumber >= 1 && targetNumber <= inRange;
  }

  changePage(moveToPage: number): void {
    this.pageChanged.emit(moveToPage);
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

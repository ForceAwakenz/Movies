import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

type INumberTrio = [number, number, number];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() pagesTotal: number;
  @Input() currentPage: number;
  @Output() pageChanged = new EventEmitter<number>();

  pageNumberTrio: INumberTrio;

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentPage' in changes || 'pagesTotal' in changes) {
      this.pageNumberTrio = this.constructNumberTrio(this.currentPage, this.pagesTotal);
    }
  }

  pageInRange(targetNumber: number, inRange: number): boolean {
    return  targetNumber >= 1 && targetNumber <= inRange;
  }

  changePage(moveToPage: number): void {
    this.pageChanged.emit(moveToPage);
  }

  private constructNumberTrio(newActivePage: number, pagesTotal: number): INumberTrio {
    if (!this.pageInRange(newActivePage - 1, pagesTotal)) {
      newActivePage++;
    }
    if (!this.pageInRange(newActivePage + 1, pagesTotal)) {
      newActivePage--;
    }
    return [ newActivePage - 1 , newActivePage, newActivePage + 1];
  }

}

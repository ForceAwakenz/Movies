import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCategoryHeaderComponent } from './movie-category-header.component';

describe('MovieCategoryHeaderComponent', () => {
  let component: MovieCategoryHeaderComponent;
  let fixture: ComponentFixture<MovieCategoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCategoryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

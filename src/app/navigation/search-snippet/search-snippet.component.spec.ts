import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSnippetComponent } from './search-snippet.component';

describe('SearchSnippetComponent', () => {
  let component: SearchSnippetComponent;
  let fixture: ComponentFixture<SearchSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

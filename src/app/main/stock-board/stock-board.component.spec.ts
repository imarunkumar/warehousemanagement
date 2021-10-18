import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBoardComponent } from './stock-board.component';

describe('StockBoardComponent', () => {
  let component: StockBoardComponent;
  let fixture: ComponentFixture<StockBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

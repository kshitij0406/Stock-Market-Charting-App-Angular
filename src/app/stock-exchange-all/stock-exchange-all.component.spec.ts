import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeAllComponent } from './stock-exchange-all.component';

describe('StockExchangeAllComponent', () => {
  let component: StockExchangeAllComponent;
  let fixture: ComponentFixture<StockExchangeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

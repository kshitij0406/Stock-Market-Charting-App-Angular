import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeUpdateComponent } from './stock-exchange-update.component';

describe('StockExchangeUpdateComponent', () => {
  let component: StockExchangeUpdateComponent;
  let fixture: ComponentFixture<StockExchangeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

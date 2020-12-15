import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeAddComponent } from './stock-exchange-add.component';

describe('StockExchangeAddComponent', () => {
  let component: StockExchangeAddComponent;
  let fixture: ComponentFixture<StockExchangeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

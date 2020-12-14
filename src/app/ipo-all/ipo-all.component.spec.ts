import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoAllComponent } from './ipo-all.component';

describe('IpoAllComponent', () => {
  let component: IpoAllComponent;
  let fixture: ComponentFixture<IpoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

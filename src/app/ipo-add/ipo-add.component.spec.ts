import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoAddComponent } from './ipo-add.component';

describe('IpoAddComponent', () => {
  let component: IpoAddComponent;
  let fixture: ComponentFixture<IpoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

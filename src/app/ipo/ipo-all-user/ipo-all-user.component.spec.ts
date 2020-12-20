import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoAllUserComponent } from './ipo-all-user.component';

describe('IpoAllUserComponent', () => {
  let component: IpoAllUserComponent;
  let fixture: ComponentFixture<IpoAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoAllUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAllUserComponent } from './company-all-user.component';

describe('CompanyAllUserComponent', () => {
  let component: CompanyAllUserComponent;
  let fixture: ComponentFixture<CompanyAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAllUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

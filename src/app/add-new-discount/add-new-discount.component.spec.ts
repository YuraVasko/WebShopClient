import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDiscountComponent } from './add-new-discount.component';

describe('AddNewDiscountComponent', () => {
  let component: AddNewDiscountComponent;
  let fixture: ComponentFixture<AddNewDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

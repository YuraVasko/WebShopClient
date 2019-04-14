import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountPerItemComponent } from './add-discount-per-item.component';

describe('AddDiscountPerItemComponent', () => {
  let component: AddDiscountPerItemComponent;
  let fixture: ComponentFixture<AddDiscountPerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscountPerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountPerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEventInfoComponent } from './dialog-event-info.component';

describe('DialogEventInfoComponent', () => {
  let component: DialogEventInfoComponent;
  let fixture: ComponentFixture<DialogEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

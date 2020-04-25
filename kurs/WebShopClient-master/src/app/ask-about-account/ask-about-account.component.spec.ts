import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAboutAccountComponent } from './ask-about-account.component';

describe('AskAboutAccountComponent', () => {
  let component: AskAboutAccountComponent;
  let fixture: ComponentFixture<AskAboutAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAboutAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAboutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

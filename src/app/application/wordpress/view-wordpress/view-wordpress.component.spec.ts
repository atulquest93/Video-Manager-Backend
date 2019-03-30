import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWordpressComponent } from './view-wordpress.component';

describe('ViewWordpressComponent', () => {
  let component: ViewWordpressComponent;
  let fixture: ComponentFixture<ViewWordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordpressComponent } from './add-wordpress.component';

describe('AddWordpressComponent', () => {
  let component: AddWordpressComponent;
  let fixture: ComponentFixture<AddWordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

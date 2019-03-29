import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNgComponent } from './basic-ng.component';

describe('BasicNgComponent', () => {
  let component: BasicNgComponent;
  let fixture: ComponentFixture<BasicNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

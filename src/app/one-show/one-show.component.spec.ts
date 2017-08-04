import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneShowComponent } from './one-show.component';

describe('OneShowComponent', () => {
  let component: OneShowComponent;
  let fixture: ComponentFixture<OneShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithTwoWayComponent } from './register-with-two-way.component';

describe('RegisterWithTwoWayComponent', () => {
  let component: RegisterWithTwoWayComponent;
  let fixture: ComponentFixture<RegisterWithTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

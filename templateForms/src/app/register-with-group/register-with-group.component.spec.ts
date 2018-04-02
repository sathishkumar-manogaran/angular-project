import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithGroupComponent } from './register-with-group.component';

describe('RegisterWithGroupComponent', () => {
  let component: RegisterWithGroupComponent;
  let fixture: ComponentFixture<RegisterWithGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

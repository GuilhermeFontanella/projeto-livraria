import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMovementComponent } from './register-movement.component';

describe('RegisterMovementComponent', () => {
  let component: RegisterMovementComponent;
  let fixture: ComponentFixture<RegisterMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

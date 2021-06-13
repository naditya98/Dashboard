import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {
  let component: userEditComponent;
  let fixture: ComponentFixture<userEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

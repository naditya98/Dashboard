import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userViewComponent } from './user-view.component';

describe('UserViewComponent', () => {
  let component: userViewComponent;
  let fixture: ComponentFixture<userViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

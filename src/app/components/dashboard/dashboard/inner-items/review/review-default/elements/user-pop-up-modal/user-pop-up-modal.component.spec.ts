import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPopUpModalComponent } from './user-pop-up-modal.component';

describe('UserPopUpModalComponent', () => {
  let component: UserPopUpModalComponent;
  let fixture: ComponentFixture<UserPopUpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPopUpModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPopUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

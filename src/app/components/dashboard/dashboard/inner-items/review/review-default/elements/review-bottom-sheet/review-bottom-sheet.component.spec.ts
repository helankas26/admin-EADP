import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBottomSheetComponent } from './review-bottom-sheet.component';

describe('ReviewBottomSheetComponent', () => {
  let component: ReviewBottomSheetComponent;
  let fixture: ComponentFixture<ReviewBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-review-bottom-sheet',
  standalone: true,
  imports: [],
  templateUrl: './review-bottom-sheet.component.html',
  styleUrl: './review-bottom-sheet.component.scss'
})
export class ReviewBottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ReviewBottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }
}

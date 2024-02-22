import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ReviewsService} from "../../../../../services/reviews.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatDialog} from "@angular/material/dialog";
import {ReviewBottomSheetComponent} from "./elements/review-bottom-sheet/review-bottom-sheet.component";
import {UserPopUpModalComponent} from "./elements/user-pop-up-modal/user-pop-up-modal.component";
import {MatPaginator} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-review-default',
  standalone: true,
  imports: [
    MatPaginator,
    DatePipe,
    MatButton
  ],
  templateUrl: './review-default.component.html',
  styleUrl: './review-default.component.scss'
})
export class ReviewDefaultComponent implements AfterViewInit, OnInit {
  page: any = 0;
  size: any = 10;
  dataArray: any[] = [];
  count = 0;

  constructor(private reviewsService: ReviewsService, private bottomSheet: MatBottomSheet, private dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.reviewsService.loadData(this.page, this.size).subscribe(response => {
      console.log(response);
      this.dataArray = response?.dataList;
      this.count = response?.count;
    })
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadData();
  }

  showProduct(id: any) {
    // need to implement the code
  }

  showReview(review: any) {
    this.bottomSheet.open(ReviewBottomSheetComponent, {
      data: {review: review}
    });
  }

  findUser(userId: any) {
    let matDialogRef = this.dialog.open(UserPopUpModalComponent, {
      data: {id: userId},
      disableClose: true
    });
    matDialogRef.afterClosed().subscribe(response => {

    })
  }
}

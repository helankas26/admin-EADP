import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {UsersService} from "../../../../../../../services/users.service";

@Component({
  selector: 'app-user-pop-up-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './user-pop-up-modal.component.html',
  styleUrl: './user-pop-up-modal.component.scss'
})
export class UserPopUpModalComponent implements OnInit {
  constructor(private _bottomDialogRef: MatDialogRef<UserPopUpModalComponent>,
              private userService: UsersService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.loadUserData(this.data?.id);
  }

  userData: any;

  private loadUserData(id: any) {
    this.userService.findUser(id).subscribe(response => {
      this.userData = JSON.stringify(response?.data);
    }, error => {
      console.log(error);
    })
  }


}

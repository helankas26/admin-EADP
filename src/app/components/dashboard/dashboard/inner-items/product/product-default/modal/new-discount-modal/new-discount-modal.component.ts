import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DiscountsService} from "../../../../../../../services/discounts.service";

@Component({
  selector: 'app-new-discount-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './new-discount-modal.component.html',
  styleUrl: './new-discount-modal.component.scss'
})
export class NewDiscountModalComponent {
  constructor(
    public dialogRef: MatDialogRef<NewDiscountModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private discountService: DiscountsService
  ) {
  }

  form = new FormGroup({
    discountTitle: new FormControl('', [Validators.required]),
    discountType: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required])
  })

  saveDiscount() {
    this.discountService.saveDiscount(
      this.form.value.discountTitle,
      this.form.value.discountType,
      this.form.value.discount,
      this.data.id
    ).subscribe(response => {

      this.dialogRef.close();

    }, error => {
      console.log(error);
    })
  }
}

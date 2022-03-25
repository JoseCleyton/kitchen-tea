import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-gift',
  templateUrl: './new-gift.component.html',
  styleUrls: ['./new-gift.component.scss'],
})
export class NewGiftComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewGiftComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

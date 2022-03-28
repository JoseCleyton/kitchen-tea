import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  formEditEvent: FormGroup;
  event: any;
  constructor(
    public dialogRef: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.event = { ...this.data };
    const date = this.data.expiredIn.substring(0, 10);

    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8);
    const expiredIn = day + month + year;
    
    this.formEditEvent = new FormGroup({
      name: new FormControl(this.event.name, [Validators.required]),
      key: new FormControl(this.event.key, [Validators.required]),
      expiredIn: new FormControl(expiredIn, [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

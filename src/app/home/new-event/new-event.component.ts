import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
})
export class NewEventComponent implements OnInit {
  formNewEvent: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewEventComponent>) {}

  ngOnInit(): void {
    this.formNewEvent = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      key: new FormControl(null, [Validators.required]),
      expiredIn: new FormControl(null, [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserComponent>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      completeName: new FormControl(null, [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

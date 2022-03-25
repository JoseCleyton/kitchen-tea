import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GiftSuggestionService } from 'src/app/services/giftSuggestion/gift-suggestion.service';

@Component({
  selector: 'app-new-gift-suggestion',
  templateUrl: './new-gift-suggestion.component.html',
  styleUrls: ['./new-gift-suggestion.component.scss'],
})
export class NewGiftSuggestionComponent implements OnInit {
  formNewGiftSuggestion: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<NewGiftSuggestionComponent>) {}

  ngOnInit(): void {
    this.formNewGiftSuggestion = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required]),
      picture: new FormControl(null, [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

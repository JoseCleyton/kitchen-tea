import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() newGiftEvent: EventEmitter<string> = new EventEmitter();

  constructor(private _location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    this._location.back();
  }

  newGiftSuggestion(): void {
    this.newGiftEvent.emit('new');
  }
}

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @Input() selected: string;
  @Input() disabled = false;

  selectedGiftSugestion = '';

  @Output() selectGiftSuggestionEvent: EventEmitter<string> =
    new EventEmitter();
  @Output() clickLinkEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectGiftSuggestion(id: string): void {
    this.selectedGiftSugestion = id;
    this.selectGiftSuggestionEvent.emit(id);
  }

  clickLink(url: string): void {
    this.clickLinkEvent.emit(url);
  }
}

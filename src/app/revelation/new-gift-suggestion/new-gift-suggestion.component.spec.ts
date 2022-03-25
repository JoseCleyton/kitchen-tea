import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGiftSuggestionComponent } from './new-gift-suggestion.component';

describe('NewGiftSuggestionComponent', () => {
  let component: NewGiftSuggestionComponent;
  let fixture: ComponentFixture<NewGiftSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGiftSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGiftSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

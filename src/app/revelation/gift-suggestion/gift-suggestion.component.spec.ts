import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSuggestionComponent } from './gift-suggestion.component';

describe('GiftSuggestionComponent', () => {
  let component: GiftSuggestionComponent;
  let fixture: ComponentFixture<GiftSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

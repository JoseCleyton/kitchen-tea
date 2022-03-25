import { TestBed } from '@angular/core/testing';

import { GiftSuggestionGuard } from './gift-suggestion.guard';

describe('GiftSuggestionGuard', () => {
  let guard: GiftSuggestionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GiftSuggestionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

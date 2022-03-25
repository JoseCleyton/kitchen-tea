import { TestBed } from '@angular/core/testing';

import { GiftSuggestionService } from './gift-suggestion.service';

describe('GiftSuggestionService', () => {
  let service: GiftSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

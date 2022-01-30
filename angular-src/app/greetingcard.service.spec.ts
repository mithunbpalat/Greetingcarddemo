import { TestBed } from '@angular/core/testing';

import { GreetingcardService } from './greetingcard.service';

describe('GreetingcardService', () => {
  let service: GreetingcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

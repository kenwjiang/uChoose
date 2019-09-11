import { TestBed } from '@angular/core/testing';

import { ChooseService } from './choose.service';

describe('ChooseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseService = TestBed.get(ChooseService);
    expect(service).toBeTruthy();
  });
});

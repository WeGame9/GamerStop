import { TestBed } from '@angular/core/testing';

import { Top2021Service } from './top2021.service';

describe('Top2021Service', () => {
  let service: Top2021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top2021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

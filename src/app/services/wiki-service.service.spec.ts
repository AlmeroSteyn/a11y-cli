import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WikiServiceService } from './wiki-service.service';

describe('WikiService Service', () => {
  beforeEachProviders(() => [WikiServiceService]);

  it('should ...',
      inject([WikiServiceService], (service: WikiServiceService) => {
    expect(service).toBeTruthy();
  }));
});

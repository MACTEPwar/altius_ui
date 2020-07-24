import { TestBed } from '@angular/core/testing';
import { CUDService } from './cud-service.service';

describe('CUDServiceService', () => {
  let service: CUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

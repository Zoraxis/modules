import { TestBed } from '@angular/core/testing';

import { ApiService } from './apiservice.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService, HttpClient, HttpHandler]});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Observable', () => {
    service = TestBed.inject(ApiService);
    expect(service.getAll()).toBeInstanceOf(Observable);
  });
});

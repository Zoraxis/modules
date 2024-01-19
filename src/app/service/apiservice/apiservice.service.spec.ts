// import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

// import { ApiService } from './apiservice.service';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { Observable, firstValueFrom } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Module } from '../../models/Module';

// describe('ApiService', () => {
//   let httpClient: HttpClient;
//   let service: ApiService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [ApiService],
//     });
//     httpClient = TestBed.inject(HttpClient);
//     service = TestBed.inject(ApiService);
//   });

//   //does not call db from tests
//   // it('can call db', (done) => {
//   //   const testOneUrl =
//   //     'https://babtec-vas-default-rtdb.europe-west1.firebasedatabase.app/0/modules/0.json';
//   //   const testOneData = new Module(
//   //     'APQP Projektmanagment',
//   //     132,
//   //     'settings_accessibility'
//   //   );

//   //   // get one module
//   //   httpClient.get<Module>(testOneUrl).subscribe((data) => {
//   //     console.log("🚀 ~ httpClient.get<Module> ~ data:", data)
//   //     // test if data is equal to ahrdcoded module
//   //     expect(data).toEqual(testOneData);
//   //     service.getAll().subscribe((serviceResponceData) => {
//   //       //compare api data with service data
//   //       expect(serviceResponceData).toEqual(data);
//   //       // done()
//   //     });
//   //   });

//   //   const testUrl =
//   //     'https://babtec-vas-default-rtdb.europe-west1.firebasedatabase.app/.json';

//   //   //call api directly
//   //   httpClient.get<Module>(testUrl).subscribe((data) => {
//   //     console.log("🚀 ~ httpClient.get<Module> ~ data:", data)
//   //     //call api with service
//   //     service.getAll().subscribe((serviceResponceData) => {
//   //       //compare api data with service data
//   //       expect(serviceResponceData).toEqual(data);
//   //       // done()
//   //     });
//   //   });
//   // });
// });

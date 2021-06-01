import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainService } from './main.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should call getProducts method and subscribe values', () => {
    const mockVal: any = [
      {
        "id": "001",
        "name": "Mi LED Smart TV 4A 108 cm (43)",
        "price": 22999,
        "image": "https://rukminim1.flixcart.com/image/832/832/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=70",
        "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        "id": "002",
        "name": "Vu 80cm (32 inch) HD Ready LED TV",
        "price": 15999,
        "image": "https://rukminim1.flixcart.com/image/612/612/jdhp47k0/television/m/6/w/vu-32k160m-original-imaf27fyb4kuayaf.jpeg?q=70",
        "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }
    ];

    spyOn(service, 'getProducts').and.returnValue(of(mockVal));
    //fixture.detectChanges();
    expect(service.getProducts).toHaveBeenCalled();

  });


});

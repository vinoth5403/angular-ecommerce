import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let service: MainService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [MainService],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MainService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ecom'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecom');
  });

  it('should call service1 method2', async(() => {
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
    fixture.detectChanges();
    expect(service.getProducts).toHaveBeenCalled();
  }));

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { SharedService } from './../shared.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        Ng2SearchPipeModule ],
      declarations: [ ProductListComponent ],
      providers: [ SharedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    service = TestBed.inject(SharedService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSearchText method', async() => {
    const mockData = 'test';
    spyOn(service, 'getSearchText').and.returnValue(of(mockData));
    fixture.detectChanges();
    expect(component.searchTxt).toEqual(mockData);
  });

  it('should call addProductToCart method', () => {
    component.singleProduct = [
      {
        "id": "001",
        "name": "Mi LED Smart TV 4A 108 cm (43)",
        "price": 22999,
        "image": "https://rukminim1.flixcart.com/image/832/832/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=70",
        "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }
    ];

    spyOn(service,'addProductToCart').and.returnValue(component.singleProduct);
    component.addToCart('event',6)
    expect(service.addProductToCart).toHaveBeenCalled();
  });

  
});

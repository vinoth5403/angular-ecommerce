import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';
import { SharedService } from './../../shared.service';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let service: SharedService;
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CartComponent ],
      providers: [ SharedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(SharedService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts method from shared service', async(() => {
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

    const getProductValues = spyOn(service, 'getProducts').and.returnValue(of(mockVal));
    component.ngOnInit();
    expect(getProductValues).toHaveBeenCalled();
  }));

  it('should call emptyCart method', () => {
    spyOn(service,'emptryCart').and.callThrough();
    component.emptyCart();
    expect(service.emptryCart).toHaveBeenCalled();
  });

});

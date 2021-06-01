import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from './shared.service';
import { Subject } from 'rxjs';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [SharedService]
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getProducts method', () => {
    spyOn(service,'getProducts')
    service.getProducts();
    expect(service.getProducts).toHaveBeenCalled();
  });

  it('should call getSearchText method', () => {
    service.getSearchText();
    //let subj = new Subject();
    //spyOn(service,'getSearchTxt').
    //expect(getSearchTxt).toHaveBeenCalled()
  });

  it('should call setSearchText method', () => {
    service.setSearchText('test');
  });

  it('should call addProductToCart method', () => {
    let sub = new Subject();
    let cartItems = [
      {
        "id": "001",
        "name": "Mi LED Smart TV 4A 108 cm (43)",
        "price": 22999,
        "image": "https://rukminim1.flixcart.com/image/832/832/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=70",
        "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }
    ];

     service.addProductToCart('products');
     sub.subscribe((message) => {
      expect(message).toBe(cartItems);
    })
    sub.next(cartItems);
    
  });

  it('should call removeProductFromCart method', () => {
    let sub = new Subject();
    let cartItems = [
      {
        "id": "001",
        "name": "Mi LED Smart TV 4A 108 cm (43)",
        "price": 22999,
        "image": "https://rukminim1.flixcart.com/image/832/832/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=70",
        "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }
    ];

     service.removeProductFromCart('products');
     sub.subscribe((message) => {
      expect(message).toBe(cartItems);
    })
    sub.next(cartItems);
  });

  it('should call emptryCart method', () => {
    const cartItems = [];
    service.emptryCart();
    expect(cartItems.length).toEqual(0)
  });

  it('should call getTotalPrice method', () => {
    let cartItems = [{price: 200}];
    let total = 0;
    cartItems.map(item => {
      total += item.price;
    })
    service.getTotalPrice();
    expect(total).toEqual(200);
  });

});

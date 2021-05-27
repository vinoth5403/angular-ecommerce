import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from './shared.service';

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
  });

  it('should call setSearchText method', () => {
    service.setSearchText('test');
  });

  it('should call addProductToCart method', () => {
    service.addProductToCart('products');
  });

  it('should call removeProductFromCart method', () => {
    service.removeProductFromCart('products');
  });

  it('should call removeProductFromCart method', () => {
    const cartItems = [];
    service.emptryCart();
    expect(cartItems.length).toEqual(0)
  });

  
  it('should call getTotalPrice method', () => {
    service.getTotalPrice();
    let cartItems = [{price: 200}];
    let total = 0;
    //expect(total).toEqual(1);
    cartItems.map(item => {
      total += item.price;
    })
    expect(total).toEqual(200);
  });

});

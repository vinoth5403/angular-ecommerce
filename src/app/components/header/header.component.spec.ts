import { 
   async,
   ComponentFixture, 
   TestBed, 
   fakeAsync,
    tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedService } from './../../shared.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts method', () => {
    //const cartProductCount = 0;
    //const op = spyOn(service,'getProducts').and.returnValue(cartProductCount);
    //console.log(op)
    //expect(component).toBeTruthy();
  });

  //it('should call change text method', () => {
    //let txt = 'test';
    //service.setSearchText(txt);
    //spyOn(service,'setSearchText');
    //component.changeText();
    
    //expect(component.changeText).toHaveBeenCalled();
    //let spy = spyOn(service,'setSearchText').and.callThrough();
    //(spy).toHaveBeenCalled();
  //});

});

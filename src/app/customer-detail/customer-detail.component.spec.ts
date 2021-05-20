import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import {of} from 'rxjs';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

const mockCustomerData = {
  'firstName': 'Chetan',
  'lastName': 'Patil',
  'phone': '77777',
  'email': 'chetan.patil@gmail.com',
  'age': '21'
};
class MockAPi {
  getCustomerDetail() {
    return of(mockCustomerData);
  }
}

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


fdescribe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailComponent ],
      providers: [{provide: ApiService, useClass: MockAPi},  {provide: Router, useValue: routerSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search field to get customer detail  ', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.search-box button')).toBeTruthy();
    expect(compiled.querySelector('.search-box input')).toBeTruthy();
  });


  it('should render customer detail in form  ', () => {
    const compiled = fixture.nativeElement;
    const searchButton = compiled.querySelector('.search-box button');
    searchButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('form')).toBeTruthy();

  });

});

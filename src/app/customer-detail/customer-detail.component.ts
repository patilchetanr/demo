import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';
import {SessionService} from '../session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  searchId: string = '1';
  customerResultAvailable: boolean = false;
  formUpdated: boolean = false;

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(private api: ApiService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  retrive() {
    this.customerResultAvailable = false;
    if (this.searchId) {
      this.api.getCustomerDetail(this.searchId).subscribe( response => {
        this.customerResultAvailable = true;
        this.sessionService.customerDetail = response;
        this.customerForm.setValue(response);
        this.customerForm.valueChanges.subscribe( x => {
          this.formUpdated = true;
        });
      });
    }
  }



  update() {
    this.sessionService.customerDetail = this.customerForm.value;
    this.router.navigate(['/result']);
    this.customerForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    if ( !this.sessionService.customerDetail) {
      this.router.navigate(['/']);
    }
  }

  get userName(): string {
    return this.sessionService.customerDetail && this.sessionService.customerDetail.firstName ? this.sessionService.customerDetail.firstName : '';
  }

  camel2title = (camelCase: string) => camelCase.replace(/([A-Z])/g, (match) => ` ${match}`).replace(/^./, (match) => match.toUpperCase()).trim();

  get attributeNames(): string[] {
    return Object.keys(this.sessionService.customerDetail);
  }

  getValue(attribute: string): string {
    return this.sessionService.customerDetail[attribute];
  }
}

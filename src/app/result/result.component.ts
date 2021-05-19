import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  get resultString() {
    return JSON.stringify(this.sessionService.customerDetail);
  }
}

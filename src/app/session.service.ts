import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _customerDetail: any;

  public get customerDetail(): any {
    return this._customerDetail;
  }

  public set customerDetail(param) {
     this._customerDetail = param;
  }

  constructor() { }
}

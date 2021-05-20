import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

class MockSessionService {
  customerDetail = {};
}

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      providers: [{provide: Router, useValue: routerSpy}, {provide: SessionService, useClass: MockSessionService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

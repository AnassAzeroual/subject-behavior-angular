/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CComponent } from './C.component';

describe('CComponent', () => {
  let component: CComponent;
  let fixture: ComponentFixture<CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

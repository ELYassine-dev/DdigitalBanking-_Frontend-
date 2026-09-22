import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCustomer } from './add-new-customer';

describe('AddNewCustomer', () => {
  let component: AddNewCustomer;
  let fixture: ComponentFixture<AddNewCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

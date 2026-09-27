import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorization } from './not-authorization';

describe('NotAuthorization', () => {
  let component: NotAuthorization;
  let fixture: ComponentFixture<NotAuthorization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAuthorization],
    }).compileComponents();

    fixture = TestBed.createComponent(NotAuthorization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

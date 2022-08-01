import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewplansComponent } from './renewplans.component';

describe('RenewplansComponent', () => {
  let component: RenewplansComponent;
  let fixture: ComponentFixture<RenewplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

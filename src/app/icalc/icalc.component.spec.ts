import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcalcComponent } from './icalc.component';

describe('IcalcComponent', () => {
  let component: IcalcComponent;
  let fixture: ComponentFixture<IcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

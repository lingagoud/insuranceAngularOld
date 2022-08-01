import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcalcShowComponent } from './icalc-show.component';

describe('IcalcShowComponent', () => {
  let component: IcalcShowComponent;
  let fixture: ComponentFixture<IcalcShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcalcShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcalcShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

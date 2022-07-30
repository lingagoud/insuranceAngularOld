import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuyComponent } from './ibuy.component';

describe('IbuyComponent', () => {
  let component: IbuyComponent;
  let fixture: ComponentFixture<IbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

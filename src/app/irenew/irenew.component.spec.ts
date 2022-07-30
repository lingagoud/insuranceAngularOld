import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrenewComponent } from './irenew.component';

describe('IrenewComponent', () => {
  let component: IrenewComponent;
  let fixture: ComponentFixture<IrenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

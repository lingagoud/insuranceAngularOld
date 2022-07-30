import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IclaimComponent } from './iclaim.component';

describe('IclaimComponent', () => {
  let component: IclaimComponent;
  let fixture: ComponentFixture<IclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

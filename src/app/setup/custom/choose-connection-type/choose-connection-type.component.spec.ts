import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseConnectionTypeComponent } from './choose-connection-type.component';

describe('ChooseConnectionTypeComponent', () => {
  let component: ChooseConnectionTypeComponent;
  let fixture: ComponentFixture<ChooseConnectionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseConnectionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseConnectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSecurityLevelComponent } from './choose-security-level.component';

describe('ChooseSecurityLevelComponent', () => {
  let component: ChooseSecurityLevelComponent;
  let fixture: ComponentFixture<ChooseSecurityLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSecurityLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSecurityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

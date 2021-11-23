import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNewPasswordComponent } from './template-new-password.component';

describe('TemplateNewPasswordComponent', () => {
  let component: TemplateNewPasswordComponent;
  let fixture: ComponentFixture<TemplateNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

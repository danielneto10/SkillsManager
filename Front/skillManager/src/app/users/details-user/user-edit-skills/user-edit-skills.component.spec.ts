import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditSkillsComponent } from './user-edit-skills.component';

describe('UserEditSkillsComponent', () => {
  let component: UserEditSkillsComponent;
  let fixture: ComponentFixture<UserEditSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

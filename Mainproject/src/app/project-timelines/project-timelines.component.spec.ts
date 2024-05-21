import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimelinesComponent } from './project-timelines.component';

describe('ProjectTimelinesComponent', () => {
  let component: ProjectTimelinesComponent;
  let fixture: ComponentFixture<ProjectTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectTimelinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

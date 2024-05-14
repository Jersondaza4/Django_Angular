import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddComponent } from './task-add.component';

describe('TaskAddComponent', () => {
  let component: TasksAddComponent;
  let fixture: ComponentFixture<TasksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

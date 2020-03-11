import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { TaskService } from 'src/app/shared/services/tasks/task.service';

@Component({
  selector: 'app-tasks-task-edit',
  templateUrl: './edit.component.html',
})
export class TaskEditComponent extends DialogComponent implements OnInit {
  projects = []

  constructor(
    private taskService: TaskService,
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog)

    this.form = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(3)]],
      projectId: [data.projectId, [Validators.required]],
      hours: [data.hours, [Validators.required]],
      description: [data.description, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this.projectsService.get().subscribe(
      (next) => {
        this.projects = next.items
      },
      (error) => {
        
      }
    )
  }


  submit() {
    this.taskService.update(this.data.id, this.form.value)
      .subscribe(
        (data) => {
          this.working = false
          this.dialog.close(data)
        },
        (error) => {
          this.error = error
          this.working = false
        }
      )
  }
}

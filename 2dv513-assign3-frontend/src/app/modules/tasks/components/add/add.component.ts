import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { TasksService } from '../../../../shared/services/tasks/tasks.service';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {
  projects = []

  constructor(
    private tasksService: TasksService,
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog)

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      projectId: [0, [Validators.required]],
      hours: [1, [Validators.required]],
      description: ['', [Validators.required]]
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
    this.tasksService.add(this.form.value)
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

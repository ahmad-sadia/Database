import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { TaskService } from '../../../../../shared/services/tasks/task.service';


@Component({
  selector: 'app-tasks-task-delete',
  templateUrl: './delete.component.html',
})
export class TaskDeleteComponent extends DialogComponent {
  constructor(
    private taskService: TaskService,
    private dialog: MatDialogRef<TaskDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog)
  }

  submit() {
    this.taskService.delete(this.data.id)
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close(this.data.id);
        },
        (error) => {
          this.error = error;
          this.working = false;
        }
      );
  }
}

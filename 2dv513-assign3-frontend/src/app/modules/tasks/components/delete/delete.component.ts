import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { TasksService } from '../../../../shared/services/tasks/tasks.service';


@Component({
  selector: 'app-tasks-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent extends DialogComponent {
  constructor(
    private tasksService: TasksService,
    private dialog: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

  }

  submit() {
    this.tasksService.delete({ids: this.data.map(x => x.id)})
      .subscribe(
        (data) => {
          this.working = false;
          this.dialog.close(this.data.map(x => x.id));
        },
        (error) => {
          this.error = error;
          this.working = false;
        }
      );
  }
}

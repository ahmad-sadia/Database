import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectsService } from '../../../../shared/services/projects/projects.service';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';


@Component({
  selector: 'app-projects-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent extends DialogComponent {
  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

  }

  submit() {
    this.projectsService.delete({ids: this.data.map(x => x.id)})
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

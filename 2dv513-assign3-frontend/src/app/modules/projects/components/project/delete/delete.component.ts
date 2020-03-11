import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { ProjectService } from '../../../../../shared/services/projects/project.service'
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component'

@Component({
  selector: 'app-projects-project-delete',
  templateUrl: './delete.component.html',
})
export class ProjectDeleteComponent extends DialogComponent {
  constructor(
    private projectService: ProjectService,
    private dialog: MatDialogRef<ProjectDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog)
  }

  submit() {
    this.projectService.delete(this.data.id)
      .subscribe(
        (data) => {
          this.working = false
          this.dialog.close(this.data.id)
        },
        (error) => {
          this.error = error;
          this.working = false;
        }
      )
  }
}

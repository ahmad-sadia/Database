import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { ProjectService } from '../../../../shared/services/projects/project.service';


@Component({
  selector: 'app-project-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent extends DialogComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(3)]],
      description: [data.description, []],
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.projectService.update(this.data.id, this.form.value)
      .subscribe(
        (data) => {
          this.working = false
          this.dialog.close(data)
        },
        (error) => {
          this.error = error
          this.working = false
        }
      );
  }
}

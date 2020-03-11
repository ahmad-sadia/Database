import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { ProjectsService } from '../../../../shared/services/projects/projects.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.projectsService.add(this.form.value)
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

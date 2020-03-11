import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './add.component.html',
})
export class AddComponent extends DialogComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private dialog: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialog);

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      admin: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  submit() {
    this.usersService.add(this.form.value)
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

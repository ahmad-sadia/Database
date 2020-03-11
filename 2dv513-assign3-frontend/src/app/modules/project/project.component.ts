import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  project = null;
  working = false;

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.project = this.route.snapshot.data.project;
  }

  openEditComponent() {
    const ref = this.dialog.open(EditComponent, { autoFocus: true, width: '480px', data: this.project });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.project = result;
      }
    });
  }
}



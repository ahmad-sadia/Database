import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/users/user';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UsersService } from 'src/app/shared/services/users/users.service';


@Component({
  selector: 'app-users-online',
  templateUrl: './users-online.component.html',
  styleUrls: ['./users-online.component.scss'],
})
export class UsersOnlineComponent extends ItemsComponent<User> {
  columns = ['select', 'name', 'accessedAt', 'lastAccess'];
  displayedColumns = ['select', 'name', 'accessedAt', 'lastAccess'];

  constructor(
    public usersService: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  ngOnDestroy(): void {

  }
  // ---------------------
  get(filterValue = '', sortOrder = 'asc'): void {
    this.working = true;
    this.clear();
    this.usersService.online()
      .subscribe(
        (data) => {
          this.working = false
          this.set(data)
        },
        (error) => {
          this.working = false;
          this.snackBar.open((error.status === 0) ? error.message : error.error, null, {
            duration: 3000,
          })
        }
      )
  }
}



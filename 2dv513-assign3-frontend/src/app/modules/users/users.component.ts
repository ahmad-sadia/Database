import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { User } from 'src/app/shared/models/users/user';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DeleteComponent } from './components/delete/delete.component';
import { AddComponent } from './components/add/add.component';
import { UserDeleteComponent } from './components/user/delete/delete.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends ItemsComponent<User> {
  columns = ['select', 'name', 'createdAt', 'edit'];
  displayedColumns = ['select', 'name', 'createdAt', 'edit'];

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

  openAddComponent() {
    const ref = this.dialog.open(AddComponent, {
      autoFocus: true, width: '480px'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.add(result)
      }
    })
  }

  openDeleteComponent() {
    const ref = this.dialog.open(DeleteComponent, { autoFocus: true, data: this.selection.selected });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    })
  }

    // ---------------------
    openUserDeleteComponent(item) {
      const ref = this.dialog.open(UserDeleteComponent, { autoFocus: true, data: item });
      ref.afterClosed().subscribe(result => {
        if (result) {
          this.delete(result);
        }
      })
    }

  // ---------------------
  get(filterValue = '', sortOrder = 'asc'): void {
    this.working = true;
    this.clear();
    this.usersService.get({ filterValue, sortOrder, pageIndex: this.pageIndex, pageSize: this.pageSize })
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



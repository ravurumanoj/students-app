import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'score', 'actions'];
  usersDataSource: any[] = [];

  constructor(private db: AngularFireDatabase, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.db.list('/users').valueChanges().subscribe(users => {
      this.usersDataSource = users.filter((user: any) => user.age < 21);
    });
  }

  addToWinners(user: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.db.list('/winners').push({ name: user.name, score: user.score ,age: user.age});
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'score'];
  toppersDataSource!: MatTableDataSource<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.loadToppers();
  }

  loadToppers() {
    this.db.list('/users').valueChanges().subscribe(users => {
      const filteredUsers = users.filter((user: any) => user.score > 90 && user.age < 21);
      this.toppersDataSource = new MatTableDataSource(filteredUsers);
    });
  }
}

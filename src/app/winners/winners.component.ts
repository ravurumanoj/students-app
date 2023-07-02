import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'score', 'age'];
  winnersDataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private db: AngularFireDatabase) {
    this.winnersDataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.loadWinners();
  }

  loadWinners() {
    this.db.list('/winners').valueChanges().subscribe(winners => {
      this.winnersDataSource.data = winners;
      this.winnersDataSource.sort = this.sort;
    });
  }
}

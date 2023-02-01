import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userDataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: any;
  constructor() {
    this.userDataSource = new MatTableDataSource([
      {
        id: 'adfadsf',
        name: 'usman',
        surname: 'farooq',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
      {
        id: 'adfadsf',
        name: 'usman',
        surname:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo odit ullam vitae, commodi assumenda consequuntur unde perspiciatis magnam modi!',
      },
    ]);

    this.displayedColumns = ['id', 'name', 'surname'];
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.userDataSource.paginator = this.paginator;
  }
}

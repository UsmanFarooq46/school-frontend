import { ToasterService } from './../../shared-services/toaster.service';
import { AdminService } from './admin.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  dummyDataArray = [
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
  ];
  userDataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: any;
  constructor(private service: AdminService, private toaster: ToasterService) {
    this.userDataSource = new MatTableDataSource(this.dummyDataArray);
    this.displayedColumns = ['id', 'name', 'surname'];
  }

  ngOnInit(): void {
    console.log('going to add ngRx Library in this project');
    this.getAllUser();
  }

  ngAfterViewInit() {
    this.userDataSource.paginator = this.paginator;
  }

  getAllUser() {
    this.service.getAllUser().subscribe(
      (resp) => {
        console.log('got all users: ', resp);
      },
      (err) => {
        this.toaster.openSnackBar(err.error.message || err.message);
      }
    );
  }
}

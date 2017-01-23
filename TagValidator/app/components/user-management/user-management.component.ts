import { Component, OnInit, Input } from '@angular/core';
import { TableApiService } from '../../services/table-api.service';

@Component({
    selector: 'user-management',
    templateUrl: 'app/components/user-management/user-management.component.html',
    styleUrls: ['app/components/user-management/user-management.component.css',
        'app/components/one-time-scan/one-time-scan.component.css'
    ]
})
export class UserManagementComponent implements OnInit {

    users: any;
      pagination: {
    first: number;
    previous: number;
    current: number;
    pages: number[];
    next: number;
    last: number;
  } = {
    first: 1,
    previous: null,
    current: 1,
    pages: [1],
    next: null,
    last: null
  };
    constructor(private _tableService: TableApiService) {}

      getPagination(data: any) {
    let pagesCount = Math.ceil(data.count / 20);
    this.pagination.pages = [];
    this.pagination.previous = data.previous?parseInt(data.previous.charAt(data.previous.length-1)):null;
    for(let i = 1;i<=pagesCount;i++){
      this.pagination.pages.push(i);
    }
    this.pagination.next = data.next?parseInt(data.next.charAt(data.next.length-1)):null;
    this.pagination.last = pagesCount;
  }

  setCurrentPage(num:number){
    if(num>0){
    this.pagination.current = num;
    this.getUsersData(num);
    }
  }

    getUsersData(num?:number) {
        this._tableService.getUsersData(num)
            .subscribe(users => {
                this.getPagination(users);
                this.users = users.results;
            });
    }

    onSearchFilter(val: string) {
        // Declare variables
        let filter: string, table: any, tr: any, td: any, i: number;
        filter = val.toUpperCase();
        table = document.getElementById("userTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    onClickFilter(val: string) {
        // Declare variables
        let filter: string, table: any, tr: any, td: any, i: number;
        filter = val.toUpperCase();
        table = document.getElementById("userTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    ngOnInit() {
        this.getUsersData();
    }

}
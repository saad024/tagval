import {Component, OnInit} from '@angular/core';
import {TableApiService} from '../../services/table-api.service';

@Component({
	selector : 'user-management',
	templateUrl : 'app/components/user-management/user-management.component.html',	               
	styleUrls : ['app/components/user-management/user-management.component.css',
       'app/components/one-time-scan/one-time-scan.component.css'
	]
})
export class UserManagementComponent implements OnInit {
  users: any;
    constructor(private _tableService: TableApiService){}
    
    getUsersData(){
            this._tableService.getUsersData()
            .subscribe(users => {
                this.users = users.results;
                console.log(this.users);
            });
    }

    ngOnInit() {
        this.getUsersData();
    }
	
}
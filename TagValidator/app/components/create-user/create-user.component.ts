import {Component} from '@angular/core';
import { NgForm  }   from '@angular/forms';
import { TableApiService } from '../../services/table-api.service';

import "./user";

@Component({
	selector : 'create-user',
	templateUrl : 'app/components/create-user/create-user.component.html',
	styleUrls : ['app/components/single-info/single-info.component.css']
})

export class CreateUserComponent{

	createUser : any = {
		   createName : '',
		   userEmail : ''
	   };

	 constructor(private _tableService: TableApiService){}


 onSubmit(form:NgForm){
	 let user : User = {
		 name: form.value.createName,
		 email: form.value.userEmail,
		 is_superuser: form.value.selectUser == 'super_admin'? true:false,
		 is_staff: form.value.selectUser == 'admin'? true:false
		  };


  this._tableService.createUser(user)
  .subscribe(
	  response => console.log(response)
  )
 }
	   
}
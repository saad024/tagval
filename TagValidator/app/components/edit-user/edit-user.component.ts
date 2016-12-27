import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
	selector : 'edit-user',
	templateUrl : 'app/components/edit-user/edit-user.component.html',
	styleUrls : ['app/components/single-info/single-info.component.css']
})
export class EditUserComponent{
	

	ngOninit(){

	}
	editUser : any = {
		   editName : '',
		   editEmail : ''
	   };
}
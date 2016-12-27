import {Component} from '@angular/core';
@Component({
	selector : 'edit-user',
	templateUrl : 'app/components/edit-user/edit-user.component.html',
	styleUrls : ['app/components/single-info/single-info.component.css']
})
export class EditUserComponent{
	editUser : any = {
		   editName : '',
		   editEmail : ''
	   };
}
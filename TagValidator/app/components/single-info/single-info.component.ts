import {Component} from '@angular/core';
@Component({
	moduleId : module.id,
	selector : 'single-info',
	templateUrl : 'single-info.component.html',
	styleUrls : ['single-info.component.css']
})
export class SingleInfoComponent{

       singleInfo : any = {
		   fname : '',
		   api : '',
		   maxNumber : '',
		   apiUser : '',
		   maxSpeed : ''
	   };
	
}
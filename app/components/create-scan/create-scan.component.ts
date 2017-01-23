import { Component } from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'create-scan',
	templateUrl : 'create-scan.component.html',
	styleUrls : ['create-scan.component.css']
})
export class CreateScanComponent{

	
	onClicked(opt:string) {
	  this.option = opt;
	}
 	option: string;
}
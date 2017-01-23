import {Component} from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'main-header',
	templateUrl : 'header.component.html',
	styleUrls : ['header.component.css']
})

export class HeaderComponent{
	onClicked(){
		this.collaps  = !this.collaps;
	}
	collaps : boolean = false;
}
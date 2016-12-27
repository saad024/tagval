import {Component} from '@angular/core';
@Component({
    moduleId : module.id,
    selector : 'dropdown-check',
    templateUrl : 'dropdown-check.component.html',
    styleUrls : ['dropdown-check.component.css']
})
export class dropdownCheckComponent{
  myfunction() {
     this.dropisShown = !this.dropisShown;
	}
	dropisShown : boolean = true;
}
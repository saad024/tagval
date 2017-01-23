import { Component, Output, EventEmitter, Input} from '@angular/core';
@Component({
    moduleId : module.id,
    selector : 'dropdown-search',
    templateUrl : 'dropdown-search.component.html',
    styleUrls : ['dropdown-search.component.css']
})
export class dropdownSearchComponent{

  @Input() filterType:string = "" ;

  @Output() searchFilterEvent = new EventEmitter<string>();
  searchFilter : string;
  dropisSearch : boolean = true;
  onSearchFilter(){
    this.searchFilterEvent.emit(this.searchFilter);    
  }
}
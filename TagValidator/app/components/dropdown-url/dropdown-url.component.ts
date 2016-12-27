import {Component, OnInit} from '@angular/core';
import { TableApiService } from '../../services/table-api.service';
@Component({
    moduleId : module.id,
    selector : 'dropdown-url',
    templateUrl : 'dropdown-url.component.html',
    styleUrls : ['dropdown-url.component.css']
})
export class dropdownUrlComponent implements OnInit{
  dropisUrl : boolean = true;

  webScans : any;
	 constructor(private _tableService: TableApiService){}

	getScansData(){
		this._tableService.getScansData()
		.subscribe(webscans => {
			this.webScans = webscans.results;
			console.log(this.webScans);
		});
    }

    ngOnInit() {
        this.getScansData();
    }	
}
import {Component, OnInit} from '@angular/core';
import { TableApiService } from '../../services/table-api.service';

//  import { SearchPipe }  from '../../pipes/search.pipe';

@Component({
    moduleId : module.id,
    selector : 'dropdown-url',
    templateUrl : 'dropdown-url.component.html',
    styleUrls : ['dropdown-url.component.css'],

 
})


export class dropdownUrlComponent implements OnInit{

     power = 5;
     factor = 1;

  dropisUrl : boolean = true;

  searching : string;

  webScans : any;
	 constructor(private _tableService: TableApiService){}

	getScansData(){
		this._tableService.getScansData()
		.subscribe(webscans => {
			this.webScans = webscans.results;
			// console.log(this.webScans);
		});
    }

    ngOnInit() {
        this.getScansData();
    }	
}
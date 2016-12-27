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

  searching : string;

  webScanUrls: string[] = [];

  webScans : any;
	 constructor(private _tableService: TableApiService){}

	getScansData(){
		this._tableService.getScansData()
		.subscribe(webscans => {
			this.webScans = webscans.results;
            for(let item of this.webScans){
                this.webScanUrls.push(item.url)
            }
		});
    }

    ngOnInit() {
        this.getScansData();
    }	
}
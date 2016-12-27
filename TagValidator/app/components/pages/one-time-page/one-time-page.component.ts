import { Component,Input  } from '@angular/core';
import { TableApiService } from '../../../services/table-api.service';


@Component({
  selector: 'one-time-page',
  template:  `<one-time-scan [scanData]="webScans"></one-time-scan>`
})

export class OneTimPageComponent implements Input { 

  constructor(private _tableService: TableApiService){}
  webScans : any;

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
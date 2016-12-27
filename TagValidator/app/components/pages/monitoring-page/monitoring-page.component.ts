import { Component, OnInit } from '@angular/core';
import { TableApiService } from '../../../services/table-api.service';

@Component({
  selector: 'monitoring-page',
  template:  `
  <monitor-chart [chartData]="webScans"></monitor-chart>
  <monitor-graph [graphData]="webScans"></monitor-graph>
  <one-time-scan [scanData]="webScans"></one-time-scan>
  `
})

export class MonitoringPageComponent  implements OnInit{ 

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
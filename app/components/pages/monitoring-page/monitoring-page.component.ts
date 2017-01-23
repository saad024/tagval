import { Component, OnInit } from '@angular/core';
import { TableApiService } from '../../../services/table-api.service';

@Component({
  selector: 'monitoring-page',
  template: `
  <monitor-chart [chartData]="webScans" (clickGetURLEvent)="mGraph.upDateGraph($event);onClickGetURL($event)"></monitor-chart>
  <monitor-graph [graphData]="graphSearchURL" #mGraph></monitor-graph>
  <one-time-scan></one-time-scan>
  `
})

export class MonitoringPageComponent implements OnInit {

  webScans: any;
  graphSearchURL: string;
  constructor(private _tableService: TableApiService) {}

  getScansData() {
    this._tableService.getScansData()
      .subscribe(webscans => {
        this.webScans = webscans.results;
      });
  }

  onClickGetURL(val: string) {
    this.graphSearchURL = val;
  }

  ngOnInit() {
    this.getScansData();
  }

}
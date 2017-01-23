import { Component, Input } from '@angular/core';
import * as moment from 'moment';

import { TableApiService } from '../../services/table-api.service';

@Component({
	moduleId: module.id,
	selector: 'monitor-graph',
	templateUrl: 'monitor-graph.component.html',
	styleUrls: ['monitor-graph.component.css']
})

export class MonitorGraphComponent {

	@Input() graphData: string = '';
	
	chart: any;
	optionsHC: any;
	tagVal: string = 'week';

	webScans: any;

	today = new Date();
	prevDate = new Date();
	dates: string[] = [];

	percentPagesTracked: number[] = [0, 0, 0, 0, 0, 0, 0];
	percentDateQuality: number[] = [0, 0, 0, 0, 0, 0, 0];

	constructor(private _tableService: TableApiService) {
		this.getSetPrevDates();
		this.optionsHC = {
			chart: {
				type: 'areaspline',
				spacingTop: 30
			},
			title: {
				text: ''
			},
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 150,
				y: 100,
				floating: true,
				borderWidth: 1,
				borderColor: 'transparent',
				backgroundColor: '#FFFFFF'
			},
			xAxis: {
				categories: this.dates,
				reversed: true
			},
			yAxis: {
				title: {
					text: 'Percentage'
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: ' %'
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.5
				}
			},
			series: [{
				name: '% of Pages Tracked',
				data: this.percentPagesTracked,
				color: 'rgba(0, 183, 227, 1)'
			}, {
				name: 'Overall Data Quality',
				data: this.percentDateQuality,
				color: 'rgba(249, 198, 46, 1)',
				type: 'spline'
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 1300
					},
					chartOptions: {
						legend: {

						}
					}
				}]
			}
		};
	}

	upDateGraph(val: string) {
		this.graphData = val;
		if (this.graphData) {
			this.getScansData(this.tagVal, this.graphData);
		}
	}

	setGraphSince(val: string) {
		this.tagVal = val;
		this.upDateGraph(this.graphData);
	}

	getScansData(since?: string, search?: string) {
		this._tableService.getScansData(since, search)
			.subscribe(webscans => {
				this.webScans = webscans.results;
				if (this.webScans.length > 0) {
					this.percentPagesTracked = [];
					this.percentDateQuality = [];
					this.dates = [];
					for (let item of this.webScans) {
						this.percentPagesTracked.push(item.adobe_stats ? item.adobe_stats.coverage * 100 : 0);
						this.percentDateQuality.push(item.health_rate != null ? item.health_rate.toFixed(2) * 100 : 0);
						this.dates.push(moment(item.date_modified).format('MM/DD/YYYY').toString())
					}
					this.chart.series[0].update({
						data: this.percentPagesTracked
					});
					this.chart.series[1].update({
						data: this.percentDateQuality
					});
					this.chart.xAxis[0].setCategories(this.dates);
				} else {
					this.chart.series[0].update({
						data: [0, 0, 0, 0, 0, 0, 0]
					});
					this.getSetPrevDates();
					this.chart.series[1].update({
						data: [0, 0, 0, 0, 0, 0, 0]
					});
					this.chart.xAxis[0].setCategories(this.dates);
				}
			});
	}

	getSetPrevDates() {
		this.dates = [];
		let aaj = this.today.getDate();

		for (let i = 0; i < 7; i++) {
			this.dates.push(moment().subtract(i, 'day').format('MM/DD/YYYY').toString());
		}
	}

	saveInstance(chartInstance: any) {
		this.chart = chartInstance;
	}

}
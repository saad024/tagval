import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ng2Datetime } from 'ng2-datetime-picker';
import * as moment from 'moment';

// Override Date object formatter
Ng2Datetime.formatDate = (date: Date) : string => { 
 return moment(date).format('DD/MM/YYYY');
};

// Override Date object parser
Ng2Datetime.parseDate = (str: any): Date => { 
    return moment(str).toDate();
};

    interface ChartCircle {
        percentValue: number,
        progressDesc: string,
        progressClass: string,
        incremental: number
    }

@Component({
    selector: 'monitor-chart',
    templateUrl: 'app/components/monitor-chart/monitor-chart.component.html',
    styleUrls: ['app/components/monitor-chart/monitor-chart.component.css',
        'app/css/circle.css']
})

export class MonitorChartComponent implements OnInit {

    @Input() chartData: any = [];

    @Output() clickGetURLEvent = new EventEmitter<string>();

    urlsList: string[] = [];

    selectedWeb: string = "Select Website";
    selectedDate: string = '';

    downloadErrorReport: string = '';
    downloadFullReport: string = '';

    trackChart: ChartCircle = {
         percentValue: 0,
        progressDesc: '0%',
        progressClass: 'p0',
        incremental: 0
    };
    qualityChart: ChartCircle = {
        percentValue: 0,
        progressDesc: '0%',
        progressClass: 'p0',
        incremental: 0
    };

    constructor(){}

    display_trackChart(p: number) {
        this.trackChart.progressDesc = p + '%';
        this.trackChart.progressClass = 'p' + p;
    }
    display_qualityChart(p: number) {
        this.qualityChart.progressDesc = p + '%';
        this.qualityChart.progressClass = 'p' + p;
    }

    update_trackChart() {
        this.display_trackChart(this.trackChart.incremental++);
        if (this.trackChart.incremental <= this.trackChart.percentValue) {
            setTimeout(() => { this.update_trackChart() }, 1 * this.trackChart.incremental);
        }
    }

    update_qualityChart() {
        this.display_qualityChart(this.qualityChart.incremental++);
        if (this.qualityChart.incremental <= this.qualityChart.percentValue) {
            setTimeout(() => { this.update_qualityChart() }, 1 * this.qualityChart.incremental);
        }
    }

    refresh() {
        let upd: boolean = false;
        for (let item of this.chartData) {
            if (item.url == this.selectedWeb && item.date_modified.indexOf(moment(this.selectedDate).format('YYYY-MM-DD').toString()) > -1) {
                this.trackChart.percentValue = item.adobe_stats ? item.adobe_stats.coverage * 100 : 0;
                this.qualityChart.percentValue = item.health_rate != null ? item.health_rate.toFixed(2) * 100 : 0;
                this.downloadErrorReport = item.reports != null ? item.reports.adobe_analytics:'';
                this.downloadFullReport = item.reports != null ? item.reports.rule:'';
                upd = true;
                break;
            }
                this.downloadErrorReport = '';
                this.downloadFullReport = '';
        }
        this.trackChart.progressDesc = '0%';
        this.trackChart.progressClass = 'p0';

        this.qualityChart.progressDesc = '0%';
        this.qualityChart.progressClass = 'p0';

        this.trackChart.incremental = 0;
        this.qualityChart.incremental = 0;

        if (upd) {
            this.update_trackChart();
            this.update_qualityChart();
        }

    }

    onSelectWeb(url: string) {
        this.selectedWeb = url;
        this.refresh();
        this.onClickGetURL(url);
    }
    onSelectDate() {
        this.refresh();
    }

    onClickGetURL(item:string){
        this.clickGetURLEvent.emit(item);
    }

    refreshList(){
        if(this.chartData){
            for (let item of this.chartData) {
                this.urlsList.push(item.url);
            }
        }
    }

    ngOnInit() {
        this.update_trackChart();
        this.update_qualityChart();
    }
}
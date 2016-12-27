import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector : 'monitor-chart',
	templateUrl : 'app/components/monitor-chart/monitor-chart.component.html',
	styleUrls : ['app/components/monitor-chart/monitor-chart.component.css',
				'app/css/circle.css']
})

export class MonitorChartComponent implements OnInit{

@Input() chartData:any = [];
  

   
    progressDesc : string = '0%';
    progressClass : string = 'c100 big p0';

    progressDesc_2 : string = '0%';
    progressClass_2 : string = 'c100 big p0';

    pct2: number = 0;
    pct1: number = 0;

    display_pct1(p:number) {
        this.progressDesc = p + '%';
        this.progressClass = 'c100 big p' + p;
    }
    update_pct1() {
        this.display_pct1(this.pct1++);

        if (this.pct1 <= 75) {
            setTimeout(()=>{this.update_pct1()}, 1*this.pct1);
        }
    }

    display_pct2(p:number) {
        this.progressDesc_2 = p + '%';
        this.progressClass_2 = 'c100 big p' + p;
    }
    update_pct2() {
        this.display_pct2(this.pct2++);

        if (this.pct2 <= 50) {
            setTimeout(()=>{this.update_pct2()}, 1*this.pct2);
        }
    }


     ngOnInit() {
        this.update_pct1();
        this.update_pct2();

        // console.log(this.chartData.length);
    }


}
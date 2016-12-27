import {Component, Input} from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'monitor-graph',
	templateUrl : 'monitor-graph.component.html',
	styleUrls : ['monitor-graph.component.css']
})

export class MonitorGraphComponent{

	@Input() graphData: any; 

}
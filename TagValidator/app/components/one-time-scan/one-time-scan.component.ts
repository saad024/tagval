import { Component, OnInit, Input } from '@angular/core';
import { TableApiService } from '../../services/table-api.service';

@Component({
	moduleId : module.id,
	selector : 'one-time-scan',
	templateUrl : 'one-time-scan.component.html',
	styleUrls : ['one-time-scan.component.css']
})
export class OneTimeScanComponent implements OnInit{

    
@Input() scanData: any; 

    ngOnInit() {
     
    }	
}
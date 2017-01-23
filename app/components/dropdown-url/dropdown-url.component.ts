import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableApiService } from '../../services/table-api.service';

@Component({
    moduleId: module.id,
    selector: 'dropdown-url',
    templateUrl: 'dropdown-url.component.html',
    styleUrls: ['dropdown-url.component.css']
})

export class dropdownUrlComponent implements OnInit {

    @Input() filterType: string = "";

    @Output() clickFilterEvent = new EventEmitter<string>();

    dropisUrl: boolean = true;

    searching: string;

    searchingbyurl: string;

    itemsList: string[] = [];

    webScanUrls: string[] = [];

    webScans: any;

    usersCompanies: string[] = [];

    users: any;

    selectedURL: string;

    constructor(private _tableService: TableApiService) { }

    getData() {
        if (this.filterType == 'scan-data') {
            this.selectedURL = "Select URL";
            this._tableService.getScansData()
                .subscribe(webscans => {
                    this.webScans = webscans.results;
                    for (let item of this.webScans) {
                        this.itemsList.push(item.url)
                    }
                });
        } else if (this.filterType == 'user-data') {
            this.selectedURL = "Select Company";
            this._tableService.getUsersData()
                .subscribe(users => {
                    this.users = users.results;
                    for (let item of this.users) {
                        for (let pos of item.positions) {
                            if (pos.company) {
                                this.itemsList.push(pos.company.name)
                            }
                        }
                    }
                });
        }

    }

    onClickFilter(item: string) {
        this.selectedURL = item;
        this.clickFilterEvent.emit(item);
    }

    ngOnInit() {
        this.getData();
    }
}
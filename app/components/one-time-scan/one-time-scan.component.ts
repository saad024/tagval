import { Component, OnInit } from '@angular/core';
import { TableApiService } from '../../services/table-api.service';

@Component({
  moduleId: module.id,
  selector: 'one-time-scan',
  templateUrl: 'one-time-scan.component.html',
  styleUrls: ['one-time-scan.component.css']
})
export class OneTimeScanComponent implements OnInit {

  scanData: any;
  pagination: {
    first: number;
    previous: number;
    current: number;
    pages: number[];
    next: number;
    last: number;
  } = {
    first: 1,
    previous: null,
    current: 1,
    pages: [1],
    next: null,
    last: null
  };

  isAsc: boolean = false;

  order: string = '';

  constructor(private _tableService: TableApiService) { }

  sortIt() {
    this.isAsc = !this.isAsc;
    if (this.isAsc) {
      this.order = 'date_modified';
    } else {
      this.order = '-date_modified';
    }
    this.getScansData(this.pagination.current, this.order);
  }

  getPagination(data: any) {
    let pagesCount = Math.ceil(data.count / 20);
    this.pagination.pages = [];
    this.pagination.previous = data.previous ? parseInt(data.previous.charAt(data.previous.length - 1)) : null;
    for (let i = 1; i <= pagesCount; i++) {
      this.pagination.pages.push(i);
    }
    this.pagination.next = data.next ? parseInt(data.next.charAt(data.next.length - 1)) : null;
    this.pagination.last = pagesCount;
  }

  setCurrentPage(num: number) {
    if (num > 0) {
      this.pagination.current = num;
      this.getScansData(num, this.order);
    }
  }

  getScansData(num?: number, ordering?: string) {
    this._tableService.getScansData(undefined, undefined, num, ordering)
      .subscribe(webscans => {
        this.getPagination(webscans);
        this.scanData = webscans.results;
      });
  }

  isColumn: boolean[] = [true, true, true, true, true, false, false];
  timer: any;
  onSearchFilter(val: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this._tableService.getScansData(undefined, val, undefined, undefined)
        .subscribe(webscans => {
          this.getPagination(webscans);
          this.scanData = webscans.results;
        });
    }, 2000);

  }

  onClickFilter(val: string) {
    // Declare variables
    let filter: string, table: any, tr: any, td: any, i: number;
    filter = val.toUpperCase();
    table = document.getElementById("oneTimeTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  onColumnCheck(val: boolean[]) {
    this.isColumn = val;
  }

  ngOnInit() {
    this.getScansData();
  }
}
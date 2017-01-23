import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'dropdown-check',
    templateUrl: 'dropdown-check.component.html',
    styleUrls: ['dropdown-check.component.css']
})
export class dropdownCheckComponent {
    showHideDropdown() {
        this.dropisShown = !this.dropisShown;
    }
    dropisShown: boolean = true;

    @Output() columnCheckEvent = new EventEmitter<boolean[]>();

    isColumn: boolean[] = [true, true, true, true, true, false, false];

    onColumnCheck() {
        this.columnCheckEvent.emit(this.isColumn);
    }
}
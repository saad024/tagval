import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { TableApiService } from '../../services/table-api.service';


import "./user";

@Component({
	moduleId: module.id,
	selector: 'create-user',
	templateUrl: 'create-user.component.html',
	styleUrls: ['create-user.component.css']
})

export class CreateUserComponent implements OnInit {

	createUser: any = {
		createName: '',
		userEmail: '',
		selectUser: '',
		selectClient: ''
	};
	companies: any;

	constructor(private _tableService: TableApiService, private _location: Location) { }

	getCompanies() {
		this._tableService.getCompanies()
			.subscribe(companies => {
				this.companies = companies.results;
			});
	}

	onSubmit(form: NgForm) {
		let user: User = {
			name: form.value.createName,
			email: form.value.userEmail,
			is_superuser: form.value.selectUser == 'super_admin' ? true : false,
			is_staff: form.value.selectUser == 'admin' ? true : false,
		};
		this._tableService.createUser(user)
			.subscribe(
				response => {
					this.goBack();
				}
			)
	}

	goBack(): void{
		this._location.back();
	}

	ngOnInit() {
		this.getCompanies();
	}

}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TableApiService } from '../../services/table-api.service';

import "../create-user/user";

@Component({
	selector: 'edit-user',
	templateUrl: 'app/components/edit-user/edit-user.component.html',
	styleUrls: ['app/components/create-user/create-user.component.css']
})

export class EditUserComponent implements OnInit {

	companies: any;

	editUser = {
		id: -1,
		editName: '',
		editEmail: '',
		selectUser: '',
		selectClient:''
	};

	constructor(private _tableService: TableApiService, private route: ActivatedRoute, private location: Location) { }

	getCompanies() {
		this._tableService.getCompanies()
			.subscribe(companies => {
				this.companies = companies.results;
			});
	}

	onSubmit(form: NgForm) {
		let user: User = {
			name: form.value.editName,
			email: form.value.editEmail,
			is_superuser: form.value.selectUser == 'super_admin' ? true : false,
			is_staff: form.value.selectUser == 'admin' ? true : false,
		};

		this._tableService.updateUser(user, this.editUser.id)
			.subscribe(response => {
				this.goBack();
			})
	}

	goBack(): void {
		this.location.back();
	}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this._tableService.getUser(+params['id']))
			.subscribe(user => {
				this.editUser.id = user.id;
				this.editUser.editName = user.name;
				this.editUser.editEmail = user.email;
				this.editUser.selectUser = user.is_superuser ? 'super_admin' : user.is_staff ? 'admin' : 'user';
			});
		this.getCompanies();
	}

}
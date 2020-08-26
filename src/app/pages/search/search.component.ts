import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from './../../services/event.service';
import { ApiService } from './../../services/api.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	// seachForm : FormGroup;
	public input_search: any = null;
	constructor(
		public api: ApiService,
		private route: ActivatedRoute,
		private router: Router,
		private event: EventService
	) {
		const action_ob = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globleEvent(action_ob);
		this.input_search = localStorage.getItem('input_search');
	}

	ngOnInit(): void {}

	getSearchInput(data: any) {}
}

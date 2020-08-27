import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
	@Output() onsubmit: EventEmitter<any> = new EventEmitter<any>();
	constructor() { }

	ngOnInit(): void { }

	submit() {
		this.onsubmit.emit({ id: 1 });
	}
}

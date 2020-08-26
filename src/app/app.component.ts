import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {
	animate,
	query,
	state,
	style,
	transition,
	trigger,
	animateChild,
	group
} from '@angular/animations';

import { EventService } from './services/event.service';
import { ApiService } from './services/api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private subscription: ISubscription;
	public seodata: any = [];
	current_page = '';
	constructor(
		public title: Title,
		public meta: Meta,
		public api: ApiService,
		private route: ActivatedRoute,
		private router: Router,
		private event: EventService
	) {}

	ngOnInit() {
		this.getMetatags();
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action == 'redirect') {
				this.gotoRoute(data.redirect_to, false);
			} else if (data.action == 'flash_success_sweet') {
				this.sweetalert(
					data.dataobj.message_head,
					'success',
					data.dataobj.message
				);
			} else if (data.action == 'flash_error_sweet') {
				this.sweetalert(
					data.dataobj.message_head,
					'warning',
					data.dataobj.message
				);
			} else if (data.action == 'set_page') {
				this.current_page = data.dataobj.page;
			}
		});
	}

	sweetalert(title: string, type, message, confbtn = 'Continue') {
		Swal.fire({
			title: title,
			text: message,
			icon: type,
			confirmButtonText: confbtn,
			confirmButtonColor: '#9959f2'
		});
	}

	getMetatags() {
		this.api.getData('get-seopage', []).subscribe(
			(result) => {
				this.seodata = result.result;
				var ruts = this.router.url;
				this.setMetatags(ruts);
			},
			(error) => {}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	gotoRoute(route: string, isselfpage: boolean) {
		this.current_page = route;
		this.setMetatags(route);
		this.router.navigate(['/' + route]);
	}

	setMetatags(route: string) {
		var slug = route;
		if (route == '' || route == '/') {
			slug = 'home';
		}
		const mdata = this.seodata.find((x) => x.page_name == slug);
		if (mdata) {
			this.title.setTitle(mdata.title);
			this.meta.updateTag({ name: 'description', content: mdata.description });
			this.meta.updateTag({ name: 'title', content: mdata.title });
			this.meta.updateTag({ name: 'keywords', content: mdata.keywords });
		}
	}
}

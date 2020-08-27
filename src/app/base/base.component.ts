import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	HostListener
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { EventService } from './../services/event.service';
import { ApiService } from './../services/api.service';
import { environment } from './../../environments/environment';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
	@ViewChild('stickyMenu') menuElement: ElementRef;
	environment: any = environment;
	private subscription: ISubscription;
	sticky: boolean = false;
	naveOpen: boolean = false;
	searchOpen: boolean = false;
	elementPosition: any = 50;
	current_page = '';
	pageData: any = {};

	public input_search: any = null;
	constructor(
		public api: ApiService,
		private route: ActivatedRoute,
		private router: Router,
		private event: EventService
	) {
		// Receive event and data from another component
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action == 'set_page') {
				this.current_page = data.dataobj.page;
				if (this.current_page != '' && this.current_page != '/') {
					this.sticky = true;
				}
			}
		});
	}

	ngOnInit() {
		this.getpageDetail('home-page');
	}

	// Get home page data from api
	getpageDetail(slug: any) {
		this.api.getData(slug, []).subscribe(
			(result) => {
				this.pageData = result;
			},
			(error) => { }
		);
	}

	// Set logo sticky effect on scroll down page
	@HostListener('window:scroll', ['$event']) handleScroll() {
		const windowScroll = window.pageYOffset;
		if (windowScroll >= this.elementPosition) {
			this.sticky = true;
		} else {
			if (this.current_page == '' || this.current_page == '/') {
				this.sticky = false;
			}
		}
	}

	// Mobile nav-bar show and hide
	toggleNav() {
		if (this.naveOpen) {
			this.naveOpen = false;
		} else {
			this.naveOpen = true;
		}
	}

	// Mobile searchbar show or hide
	toggleSearch() {
		if (this.searchOpen) {
			this.searchOpen = false;
		} else {
			this.searchOpen = true;
		}
	}

	// On search event
	search() {
		localStorage.setItem('input_search', this.input_search);
		this.gotoRoute('search');
	}

	// Redirect to another route or page
	gotoRoute(route: string) {
		this.current_page = route;
		this.router.navigate(['/' + route]);
	}

	// Unsubscribe event before leave component
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

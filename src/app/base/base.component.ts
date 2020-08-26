import {
	Component,
	OnInit,
	AfterViewInit,
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
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action == 'set_page') {
				this.current_page = data.dataobj.page;
			}
		});
		this.getpageDetail('home-page');
	}

	getpageDetail(slug: any) {
		this.api.getData(slug, []).subscribe(
			(result) => {
				this.pageData = result;
			},
			(error) => {}
		);
	}

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

	toggleNav() {
		if (this.naveOpen) {
			this.naveOpen = false;
		} else {
			this.naveOpen = true;
		}
	}

	toggleSearch() {
		if (this.searchOpen) {
			this.searchOpen = false;
		} else {
			this.searchOpen = true;
		}
	}

	search() {
		localStorage.setItem('input_search', this.input_search);
		this.gotoRoute('search');
	}

	gotoRoute(route: string) {
		this.current_page = route;
		this.router.navigate(['/' + route]);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

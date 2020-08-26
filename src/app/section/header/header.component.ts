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

import { EventService } from './../../services/event.service';
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

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@ViewChild('stickyMenu') menuElement: ElementRef;
	private subscription: ISubscription;
	sticky: boolean = false;
	naveOpen: boolean = false;
	searchOpen: boolean = false;
	elementPosition: any = 50;
	current_page = '';

	public input_search: any = null;
	constructor(
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

	ngOnInit(): void {}
	ngAfterViewInit() {
		// this.elementPosition = this.menuElement.nativeElement.offsetTop;
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

	gotoRoute(route: string) {
		this.current_page = route;
		// let sucsess_ob =  {action:'flash_success_sweet',redirect_to:'',dataobj:{'message':"Tewsting sweetAlert",'message_head':'Success!'}};
		// this.event.globleEvent(sucsess_ob);
		const action_ob = { action: 'redirect', redirect_to: route, dataobj: {} };
		this.event.globleEvent(action_ob);
	}

	search() {
		localStorage.setItem('input_search', this.input_search);
		this.gotoRoute('search');
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

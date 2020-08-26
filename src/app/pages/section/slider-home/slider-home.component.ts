import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../../../services/api.service';
import { environment } from './../../../../environments/environment';

@Component({
	selector: 'app-slider-home',
	templateUrl: './slider-home.component.html',
	styleUrls: ['./slider-home.component.scss']
})
export class SliderHomeComponent implements OnInit {
	pageData: any = {};
	environment: any = environment;
	customOptions: OwlOptions = null;

	constructor(public api: ApiService) {}

	ngOnInit(): void {
		this.getpageDetail('home-page');
	}

	getpageDetail(slug: any) {
		this.api.getData(slug, []).subscribe(
			(result) => {
				this.pageData = result;
				this.loadHeroSlider();
			},
			(error) => {}
		);
	}

	loadHeroSlider() {
		this.customOptions = {
			loop: true,
			margin: 0,
			smartSpeed: 2000,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			dots: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			mouseDrag: false,
			touchDrag: true,
			navText: [
				'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
				'<span class="span-roundcircle right-roundcircle"><i class="fas fa-chevron-right"></i></span>'
			],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				768: {
					items: 1,
					nav: true
				},

				1000: {
					items: 1,
					nav: true
				},
				1025: {
					items: 1,
					nav: true,
					loop: true
				}
			}
		};
	}
}

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-slider-featured',
	templateUrl: './slider-featured.component.html',
	styleUrls: ['./slider-featured.component.scss']
})
export class SliderFeaturedComponent implements OnInit {
	featureOptions: OwlOptions = {
		loop: true,
		margin: 0,
		smartSpeed: 2000,
		autoplay: false,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: [
			'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
			'<span class="span-roundcircle owlnext-custom"><i class="fas fa-chevron-right "></i></span>'
		],
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			768: {
				items: 2,
				nav: false
			},

			1000: {
				items: 3,
				nav: true
			},
			1025: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	};

	constructor() {}

	ngOnInit(): void {}
}

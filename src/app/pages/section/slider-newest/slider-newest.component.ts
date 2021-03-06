import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-slider-newest',
	templateUrl: './slider-newest.component.html',
	styleUrls: ['./slider-newest.component.scss']
})
export class SliderNewestComponent implements OnInit {
	active_slide: number = 0;
	slides: any[] = [1, 2, 3, 4, 5];

	featureOptions: OwlOptions = {
		loop: true,
		center: false,
		mouseDrag: true,
		stagePadding: 70,
		margin: 0,
		smartSpeed: 2000,
		autoplay: false,
		autoplayHoverPause: true,
		dots: false,
		autoHeight: true,
		nav: true,
		navText: [
			'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
			'<span class="span-roundcircle owlnext-custom"><i class="fas fa-chevron-right "></i></span>'
		],
		responsive: {
			0: {
				items: 1,
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

	activeSlides: SlidesOutputData;
	constructor() { }

	ngOnInit(): void { }
	activeFlip(id: any) {
		if (this.active_slide == id) {
			this.active_slide = 0;
		} else {
			this.active_slide = id;
		}
	}
}

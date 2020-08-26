import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFeaturedComponent } from './slider-featured.component';

describe('SliderFeaturedComponent', () => {
	let component: SliderFeaturedComponent;
	let fixture: ComponentFixture<SliderFeaturedComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SliderFeaturedComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderFeaturedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

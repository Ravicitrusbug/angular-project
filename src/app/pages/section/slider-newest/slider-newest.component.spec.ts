import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNewestComponent } from './slider-newest.component';

describe('SliderNewestComponent', () => {
	let component: SliderNewestComponent;
	let fixture: ComponentFixture<SliderNewestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SliderNewestComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderNewestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCommunityComponent } from './slider-community.component';

describe('SliderCommunityComponent', () => {
	let component: SliderCommunityComponent;
	let fixture: ComponentFixture<SliderCommunityComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SliderCommunityComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderCommunityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { TestBed } from '@angular/core/testing';

import { EducatorGuard } from './educator.guard';

describe('EducatorGuard', () => {
	let guard: EducatorGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(EducatorGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});

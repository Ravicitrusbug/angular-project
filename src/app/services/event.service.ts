import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	private messageSource = new BehaviorSubject({ action: '', dataob: [] });
	currentData = this.messageSource.asObservable();
	constructor() { }

	// Create event for sharing data between any components
	globleEvent(obj: any) {
		this.messageSource.next(obj);
	}
}

import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GuestGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const authuser = JSON.parse(localStorage.getItem('authuser'));
		if (authuser && authuser.role == 'learner') {
			this.router.navigate(['educator']);
			return false;
		} else if (authuser && authuser.role == 'educator') {
			this.router.navigate(['educator']);
			return false;
		} else {
			return true;
		}
	}
}

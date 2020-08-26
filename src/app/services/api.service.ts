import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Headers, RequestOptions, Response, Http } from '@angular/http';
import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders
} from '@angular/common/http';
import { environment } from './../../environments/environment';

const API_URL = environment.api_url;
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	headers: any;
	options: RequestOptions;

	constructor(public http: HttpClient) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Accept: 'application/json'
		});
		this.headers = headers;
	}

	// Post api call without autentication or token
	submit(modal: string, myData: any): Observable<any> {
		return this.http
			.post(API_URL + modal, myData, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	// Get api call without autentication or token
	getData(modal: string, myData: any): Observable<any> {
		return this.http
			.get(API_URL + modal, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	getAuth(modal: string, myData: any): Observable<any> {
		return this.http
			.get(API_URL + modal, { headers: this.getAuthHeader() })
			.map(this.extractData)
			.catch(this.handleError);
	}

	// Post api call with access token
	postAuth(modal: string, myData: any): Observable<any> {
		return this.http
			.post(API_URL + modal, myData, { headers: this.getAuthHeader() })
			.map(this.extractData)
			.catch(this.handleError);
	}

	// Put api call with access token
	purAuth(modal: string, myData: any): Observable<any> {
		return this.http
			.put(API_URL + modal, myData, { headers: this.getAuthHeader() })
			.map(this.extractData)
			.catch(this.handleError);
	}

	getAuthHeader() {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzlmY2VlMDIzZjU2NjQwMGI2YjA1OSIsImlhdCI6MTU5NzkyNzA5MywiZXhwIjoxNjAwNTE5MDkzfQ.GgTKn76YlrO2FY-706ms3jiqK6yGtMeK4-AtSiTRSeE';

		const header = new HttpHeaders({
			Accept: 'application/json',
			Authorization: 'Bearer ' + token
		});
		return header;
	}

	private extractData(res: Response) {
		const result = res;
		return result || {};
	}

	private handleError(error: any) {
		return Observable.throw(error);
	}
}

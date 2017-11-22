import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
	private contactUrl = 'api/contacts';

	constructor( private http: HttpClient) { }


	/** GET contacts from the fake server */
  	getContacts (): Observable<Contact[]> {
    	return this.http.get<Contact[]>(this.contactUrl);
  	}

  	/** GET one contact from the fake server by Id */
  	getContact (id: number): Observable<Contact> {
  		const url = `${this.contactUrl}/${id}`;
    	return this.http.get<Contact>(url);
  	}

  	addContact (contact: Contact): Observable<Contact> {
	  return this.http.post<Contact>(this.contactUrl, contact, httpOptions);
	}

	updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactUrl, contact, httpOptions);
  }
}

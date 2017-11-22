import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	contacts: Contact[];
	title = 'app';

	constructor(private contactService: ContactService) { }


	ngOnInit() {
		this.getContacts();
	}

	getContacts():  void {
	    this.contactService.getContacts()
	     .subscribe(contacts => this.contacts = contacts);
  	}

  	add(name: string,provider: string,email: string,phone:string): void {
	  name = name.trim();
	  provider = provider.trim();
	  email = email.trim();
	  phone = phone.trim();
	  if (!name && !provider && !email && !phone) { return; }
	  this.contactService.addContact({ name,provider,email,phone } as Contact)
	    .subscribe(contacts => {
	      this.contacts.push(contacts);
	    });
	}
}

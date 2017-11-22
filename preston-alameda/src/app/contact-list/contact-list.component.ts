import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

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

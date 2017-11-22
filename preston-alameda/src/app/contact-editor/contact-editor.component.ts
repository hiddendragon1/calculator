import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})

export class ContactEditorComponent implements OnInit {
	@Input() contact: Contact;

 	constructor(private contactService: ContactService,
 		 		private route: ActivatedRoute,
 		 		private location: Location) { }


	ngOnInit() {
		this.getContact();
	}

	getContact():  void {
		const id = +this.route.snapshot.paramMap.get('id');
	    this.contactService.getContact(id)
	     .subscribe(contact => this.contact = contact);
  	}
  	
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'form-input-checkbox',
  templateUrl: '../html/app.component.forminput-checkbox.html',
  styleUrls: ['../css/app.component.forminput-checkbox.css']
})


export class FormCheckboxComponent {

	@Input() data: any;
	private currentProperty: Property;

	constructor(private propertyService: PropertyService) { }

	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
	}

	ngOnInit(): void {
		this.getProperty();
	}

}


import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'form-input-radio',
  templateUrl: '../html/app.component.forminput-radio.html',
  styleUrls: ['../css/app.component.forminput-checkbox.css']
})


export class FormRadioComponent {

	
	@Input() inputTitle: string[];
	@Input() inputClass: number[];
	@Input() inputName: string[];
	@Input() tip: string[];
	@Input() data: any[];
	private currentProperty: Property;

constructor(private propertyService: PropertyService) { }

	
	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
	}

	ngOnInit(): void {
		this.getProperty();
	}

}


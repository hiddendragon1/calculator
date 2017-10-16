import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'form-input-text',
  templateUrl: '../html/app.component.forminput-text.html',
  styleUrls: ['../css/app.component.forminput-text.css']
})


export class FormTextComponent {

	
	@Input() data: any;
	private currentProperty: Property;


	constructor(private propertyService: PropertyService) { }

	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
	}

	ngOnInit(): void {
		this.getProperty();
		console.log(this.currentProperty);
	}


	public checkName(name) {
		return name != 'fixedExpenses' && name != 'variableExpenses' && name != 'futureAssumption';
	} 
}

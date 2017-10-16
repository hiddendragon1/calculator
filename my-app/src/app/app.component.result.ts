import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'result-page',
  templateUrl: '../html/app.component.result.html',
  styleUrls: ['../css/app.component.result.css']
})


export class ResultPageComponent {
	
	@Input() data: any[];
	private currentProperty: Property;
	private results: any;

	constructor(private propertyService: PropertyService) { }

	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
		this.results = this.propertyService.getResults();
	}

	ngOnInit(): void {
		this.getProperty();
	}

	getNOI(): number {
		return 9999;
	}

	getProForma(): number {
		return 9999;
	}
}
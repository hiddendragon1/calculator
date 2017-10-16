import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'graph-analysis',
  templateUrl: '../html/app.component.graphanalysis.html',
  styleUrls: ['../css/app.component.graphanalysis.css']
})


export class GraphAnalysisComponent {


	@Input() data: any[];
	private currentProperty: Property;
	private years: any;

	constructor(private propertyService: PropertyService) { }

	
	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
		this.years = this.propertyService.getYears();
	}

	ngOnInit(): void {
		this.getProperty();
		console.log(this.years);
	}

	
}
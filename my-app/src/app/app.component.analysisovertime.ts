import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'analysis-over-time',
  templateUrl: '../html/app.component.analysisovertime.html',
  styleUrls: ['../css/app.component.analysisovertime.css']
})


export class AnalysisOverTimeComponent {


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

	
}
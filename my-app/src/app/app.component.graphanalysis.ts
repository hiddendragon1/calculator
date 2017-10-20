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

	view: any[];
	single: any[];
	colorScheme: any;

	constructor(private propertyService: PropertyService) { }

	
	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
		this.years = this.propertyService.getYears();
	}

	ngOnInit(): void {
		this.getProperty();
		this.view = [700, 300];
		console.log(this.years);
		this.colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
		var data:any= [{"name" : "anything",
			      		"value": 100}];

		for ( var value in this.currentProperty.fixedExpenses ){
	      var temp  =  {"name" : value,
	      				"value": this.currentProperty.fixedExpenses[value]};
	      data.push(temp);
	    console.log(data);
	    };
	    this.single = data;

		
	}

	 onSelect(event) {
    console.log(event);
  }

	
}
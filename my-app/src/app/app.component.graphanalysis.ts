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
	private results: any;

	view: any[];
	view2:any[];
	single: any[];
	single2:any[];
	colorScheme: any;
	showLabels = false;
  	explodeSlices = false;
  	doughnut = false;
  	showLegend=true;

	constructor(private propertyService: PropertyService) { }

	
	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
		this.results = this.propertyService.getResults();
	}

	ngOnInit(): void {
		
		this.getProperty();
		this.view = [700, 300];

		this.colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
		var data:any=[{
			"name": "P&I",
			"value": this.results.PI
		}];

		for ( var value in this.currentProperty.fixedExpenses ){
	      var temp  =  {"name" : value,
	      				"value": +this.currentProperty.fixedExpenses[value]};
	      data.push(temp);
	      console.log(data);
	    };

	    this.single = data;
	    this.single2 = [{"name": "Rent",
	    				"value": +this.currentProperty.totalMonthlyRent},
						{"name": "Other",
	    				"value": +this.currentProperty.otherMonthlyIncome}
	    				]
		
	}
	
	onSelect(event) {
    	console.log(event);
  	}

	
}
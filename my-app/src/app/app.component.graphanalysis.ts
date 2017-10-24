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
	expense: any[];
	income:any[];
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
		this.colorScheme = {domain: ['#5AA454', '#C7B42C', '#011de8','#A10A28', '#AAAAAA',
							'#c314c5','#14c5c5','#2ba901','#d6970b']};
		
	    this.expense = this.results.expenseGraph;
	    this.income =this.results.incomeGraph;
	}
	
	onSelect(event) {
    	console.log(event);
  	}

	
}
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Property } from './Property';
import { PropertyService } from './property-service';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'main-form',
  templateUrl: '../html/app.component.mainform.html',
  styleUrls: ['../css/app.component.mainform.css'],
  animations: [
  trigger('anything', [
    state('a', style({
      height: '*',
      opacity: 1
    })),
    state('b', style({
      height: 0,
      opacity: 0
    })),
    transition('a => b', animate('2000ms ease-in')),
    transition('b => a', animate('2000ms ease-out'))
  ])
]

})

export class MainFormComponent {

	private currentProperty: Property;
	private isCompleted: boolean= false;
	public is_anything: string = "b";

	constructor(private propertyService: PropertyService) { }

	getProperty(): void {
		this.currentProperty = this.propertyService.getProperty();
	}

	ngOnInit(): void {
		this.getProperty();
	}


	public testClick(event){
		console.log("testClick event clicked");
		console.log(this.currentProperty);

	}

	public formChange(event){
		
		this.isCompleted=false;
		this.is_anything= "b";
		console.log("form changed   " + this.is_anything );
	}

	public completed(event) {
		
		this.is_anything = "a";
		this.isCompleted = true;
		console.log("completed form   " + this.is_anything);
		this.propertyService.getResults();
	}

}

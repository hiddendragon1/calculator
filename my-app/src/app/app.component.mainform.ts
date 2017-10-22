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
    transition('b => a', animate('2000ms ease-in')),
    transition('a => b', animate('2000ms ease-out'))
  ])
]

})

export class MainFormComponent {

	private currentProperty: Property;
	private isCompleted: boolean= false;
	private is_anything: string= 'false';

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
		console.log("form changed");
		this.isCompleted=false;
		this.is_anything= 'b';
	}

	public completed(event) {
		console.log("completed form",event);
		this.is_anything = 'a';
		this.isCompleted = true;
		this.propertyService.getResults();
	}

}

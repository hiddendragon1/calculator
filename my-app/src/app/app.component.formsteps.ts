import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'form-step',
  template:
  `
    <div *ngIf="isActive" [hidden]="!isActive" [@test]="test">
      <h1>{{title}}</h1>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['../css/app.component.formsteps.css'],
  animations: [
  trigger('test', [
    state('in', style({
       opacity: 1
    })),
    transition('void => *', [
      style({transform: 'translateY(-100%)'}),
      animate(500)
    ]),
   
  ])
]
})
export class FormStepsComponent {
  form;

  @Input() title: string;
  @Input() hidden: boolean = false;
  @Input() isValid: boolean = true;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  public test: string ="in";
  isDisabled: boolean = true;
 

  constructor() { }


  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('Anything', Validators.required)
    });
  }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }


  get isActive(): boolean {
    return this._isActive;
  }

  public getValidator(): boolean {
    return this.form.isValid;
  }


}
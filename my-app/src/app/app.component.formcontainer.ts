import { Component, Input, Output, EventEmitter, ContentChildren, QueryList,AfterContentInit} from '@angular/core';
import { FormStepsComponent } from './app.component.formsteps';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Property } from './Property';
import { PropertyService } from './property-service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'form-container',
  templateUrl: '../html/app.component.formcontainer.html',
  styleUrls: ['../css/app.component.formcontainer.css']
})


export class FormContainerComponent implements AfterContentInit {
 
  @ContentChildren(FormStepsComponent)
  formsteps: QueryList<FormStepsComponent>;

  private _steps: Array<FormStepsComponent> = [];
  private _isCompleted: boolean = false;
  private _formTest: FormGroup;
  private currentProperty: Property;


  constructor(private propertyService: PropertyService) { }

  getProperty(): void {
    this.currentProperty = this.propertyService.getProperty();
  }

  ngAfterContentInit(): void {
    this.formsteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
    this.getProperty();
  }

  @Output()
  onStepChanged: EventEmitter<FormStepsComponent> = new EventEmitter<FormStepsComponent>();



  get steps(): Array<FormStepsComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): FormStepsComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: FormStepsComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(step: FormStepsComponent): void {

    this.activeStep = step;
     
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: FormStepsComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: FormStepsComponent = this.steps[this.activeStepIndex - 1];
   
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this.activeStep.test = this.activeStep.test === "true"? "false" : "true";
    this._isCompleted = true;
	}

}



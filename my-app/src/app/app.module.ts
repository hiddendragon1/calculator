import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } 	from '@angular/core';
import { NgbModule } 	from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { PropertyService } from './property-service';

import { AppComponent } from './app.component';
import { MainFormComponent } from './app.component.mainform';
import { FormStepsComponent } from './app.component.formsteps'
import { FormContainerComponent } from './app.component.formcontainer';
import { FormTextComponent } from './app.component.forminput-text'
import { FormCheckboxComponent } from './app.component.forminput-checkbox'
import { FormRadioComponent } from './app.component.forminput-radio';
import { ResultPageComponent } from './app.component.result';
import { AnalysisOverTimeComponent } from './app.component.analysisovertime'
import { GraphAnalysisComponent } from './app.component.graphanalysis'




@NgModule({
  declarations: [
    AppComponent,MainFormComponent,FormStepsComponent,FormContainerComponent,
    FormCheckboxComponent,FormTextComponent,FormRadioComponent,ResultPageComponent,
    AnalysisOverTimeComponent,GraphAnalysisComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,BrowserAnimationsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})


export class AppComponent  {
  title = 'The Calculator';
}



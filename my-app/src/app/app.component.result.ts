import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as jsPDF from "jspdf";
 import * as html2canvas from 'html2canvas';
 import * as d3 from "d3";

import { Property } from './Property';
import { PropertyService } from './property-service';


@Component({
  selector: 'result-page',
  templateUrl: '../html/app.component.result.html',
  styleUrls: ['../css/app.component.result.css']
})


export class ResultPageComponent {
	
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

	getPDF() {



  var doc = new jsPDF({
  orientation: 'landscape',
  unit: 'in',
  format: [11, 8.5]
})
		var options = {
		    pagesplit: true,
		    background: '#fff',
		};

		var source = window.document.getElementsByTagName("table-container")[0];
		var year = window.document.getElementsByClassName("year-container")[0];


		html2canvas(source, {
			  onrendered: function(canvas) {
			   var img = new Image();
			    var ctx = canvas.getContext('2d');
			     // canvas.width = ctx.width;
   				 // canvas.height = ctx.height;
                 // ctx.scale(2, 2);
                var imgData = canvas.toDataURL('image/png');   
                console.log(canvas);
                // doc.addImage(imgData,'PNG', 0, 0);
                doc.table(0,0,[{"abc":8900}, {"bcd": 3944}]);
                doc.save("test.pdf");
                console.log(doc)
               //window.document.body.appendChild(imgData);

                
			  },
			  background: '#fff'
		});




var svg = d3.select("svg")._groups[0][0],
        image = new Image(),
        serializer = new XMLSerializer(),
        svgStr = serializer.serializeToString(svg);

    image.src = 'data:image/svg+xml;base64,'+window.btoa(svgStr);


// var content = xml.wrap('<p></p>').parent().html();
//    content = content.replace(/xlink:title="hide\/show"/g, "");
//    content = encodeURIComponent(content);


image.onload = function() {
    image.onload = function() {};
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    image.src = canvas.toDataURL();
	
	    //  doc.addHTML(source,0,0,options,()=> {
	    	 
	    	
		   //  	doc.addImage(image.src,'PNG',0, 0);
		   //  	doc.save("testing.pdf");
	    	
	    // });

	

	// doc.addPage();
	// doc.addImage(image.src,'PNG',0, 0, 150, 100);
	

}

      
	
 
	
		//doc.fromHTML(source,15,15);
		
		
	
		
	
	}

}
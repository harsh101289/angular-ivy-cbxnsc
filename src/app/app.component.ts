import { Component, NgModule, VERSION } from '@angular/core';
import { APIDataService } from './common/service/apidata.service';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

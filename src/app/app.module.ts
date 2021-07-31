import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountryComponent } from './country/country.component';
import { APIDataService } from './common/service/apidata.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipemodule ],
  declarations: [ AppComponent, HelloComponent, CountryComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ APIDataService]
})
export class AppModule { }

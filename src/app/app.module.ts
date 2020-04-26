import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
  
@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,ListComponent,FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
//import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
   // SignupForm:FormGroup;
    constructor(private fb : FormBuilder){}
      
    SignupForm = this.fb.group({
    firstName: ['', Validators.required],

  });
      
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    constructor(
      public router: Router,
      private formBuilder: FormBuilder
    ) {
        this.myForm = this.formBuilder.group({
            name: '',
            pass: ''
          });
    }

    ngOnInit() {}


    logged(form){
        if(form.name=='magg' && form.pass=='123'){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem("usuario", JSON.stringify(form));
            this.router.navigate(['/dashboard']);
        }

    }
}

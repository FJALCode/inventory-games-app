import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { HttpService } from "./../services/http.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent extends BaseComponent implements OnInit {
    public myForm: FormGroup;
    public errorLogged: boolean = false;
    constructor(
        private router: Router, 
        private formBuilder: FormBuilder,
        http : HttpService
        ) {
        super(http)
        this.myForm = this.formBuilder.group({
            userName: ['', [Validators.required, Validators.minLength(3)]],
            pass: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    ngOnInit() { }

    /**
     * Método que loguea al usuario
     *
     * @method logged
     * @private
     * @param {*} form
     * @memberof LoginComponent
     */
    private logged(form) {
        if (form.userName == 'magg' && form.pass == '123') {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('usuario', JSON.stringify(form));
            this.router.navigate(['/dashboard']);
        } else {
            this.myForm.reset();
            this.errorLogged = true;
        }

    }

    /**
     * Habilita/Deshabilita el botón de ingresar si la condición es cumplida o no
     * 
     * @method evaluar
     * @readonly
     * @type {boolean}
     * @memberof LoginComponent
     */
    public get evaluar(): boolean {
        var user = this.myForm.get('userName').value;
        var pass = this.myForm.get('pass').value;
        if (user && user.length >= 3 && pass && pass.length >= 3) {
            return false;
        }
        return true;
    }
}

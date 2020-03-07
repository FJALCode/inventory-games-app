import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { HttpService } from "./../services/http.service";
import { TranslateService } from '@ngx-translate/core';

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
        private formBuilder: FormBuilder,
        router: Router, 
        http : HttpService,
        translate : TranslateService,
        changeDetector: ChangeDetectorRef,
        location: Location
        ) {
        super(http, translate, changeDetector,router, location);
        this.logger.append('LoginComponent.constructor');
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
        this.logger.append('LoginComponent.logged');
        if (form.userName == 'magg' && form.pass == '123') {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('usuario', JSON.stringify(form));
            this.navigate('/dashboard');
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

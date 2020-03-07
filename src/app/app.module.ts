import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';

import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BaseComponent } from './base/base.component';

import { HttpService } from './services/http.service';
import { TraceService } from './services/trace.service';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ServerErrorComponent,
        AccessDeniedComponent,
        NotFoundComponent,
        BaseComponent
    ],
    providers: [
        AuthGuard,
        TraceService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

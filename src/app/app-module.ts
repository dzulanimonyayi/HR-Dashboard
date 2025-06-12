import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BaseChartDirective} from 'ng2-charts';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    App,
    LoginComponent,
    OverviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    BaseChartDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

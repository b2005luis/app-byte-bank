import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NovaTransferenciaComponent} from "./nova-transferencia/nova-transferencia.component";
import {ExtratoComponent} from "./extrato/extrato.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MenuHomeComponent} from "./menu/menu-home/menu-home.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

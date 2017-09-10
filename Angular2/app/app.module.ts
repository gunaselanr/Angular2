import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Components/customer.component';
import { CustomerService } from './Service/customer.service';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, RouterModule],
  declarations: [ AppComponent, CustomerComponent ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, CustomerService],
})
export class AppModule { }



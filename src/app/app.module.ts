import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { IbuyComponent } from './ibuy/ibuy.component';
import { IrenewComponent } from './irenew/irenew.component';
import { IclaimComponent } from './iclaim/iclaim.component';
import { IcalcComponent } from './icalc/icalc.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecomponentComponent,
    IbuyComponent,
    IrenewComponent,
    IclaimComponent,
    IcalcComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    VehicleDetailsComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

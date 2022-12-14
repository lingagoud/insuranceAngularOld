import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { IbuyComponent } from './ibuy/ibuy.component';
import { IcalcShowComponent } from './icalc-show/icalc-show.component';
import { IcalcComponent } from './icalc/icalc.component';
import { IclaimComponent } from './iclaim/iclaim.component';
import { IrenewComponent } from './irenew/irenew.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PolicyComponent } from './policy/policy.component';
import { RenewplansComponent } from './renewplans/renewplans.component';
import { RenewpolicyComponent } from './renewpolicy/renewpolicy.component';
import { UserComponent } from './user/user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
{path:'',component:HomecomponentComponent},
{path:'Ibuy',component:IbuyComponent},
{path:'Irenew',component:IrenewComponent},
{path:'Iclaim',component:IclaimComponent},
{path:'Icalc',component:IcalcComponent},
{path:'Icalc/:typeofvehicle/:type/:duration',component:IcalcShowComponent},
{path:'login',component:LoginComponent},
{path:'user/:email',component:UserComponent},
{path:'admin/:email',component:AdminComponent},
{path:'Ibuy/vdetails/:email',component:VehicleDetailsComponent},
{path:'Ibuy/vdetails/:email/:regno',component:PlansComponent},
{path:'Ibuy/vdetails/:email/:regno/:type/:duration',component:PolicyComponent},
{path:'Renew/:policyId',component:RenewplansComponent},
{path:'Renew/:policyId/:type/:duration',component:RenewpolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

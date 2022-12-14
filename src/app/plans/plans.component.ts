import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Iplan } from '../iplan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    duration:0

  }
  email:string='';
  regno:string='';
  type:string='';
  duration=0;

  
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')
    const tregno=this.activateroute.snapshot.paramMap.get('regno')
     this.email=String(temail)
     this.regno=String(tregno)
  
  }
  getPlan(plan:Iplan){
    this.plandata=plan
   //this.planService.GetPlan(this.regno,this.plandata).subscribe((data:Iplan)=>{this.temp=data})
     this.router.navigate(['/Ibuy/vdetails/:email/:regno/:type/:duration', {email: this.email, regno:this.regno, type:this.plandata.type, duration:this.plandata.duration}])  
  
  }
 
  // addPolicy(){
  // this.planService.addpolicy(this.plandata,this.email,this.regno).subscribe((data:Iplan)=>{this.plandata=data})
  // }
  }

//  this.router.navigate(['/Ibuy/vdetails/:email/:regno/:plan', {email: this.email, regno: this.vehicledata.RegistrationNumber}])  



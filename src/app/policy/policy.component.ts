import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Iplan } from '../iplan';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

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
  duration:number=0;
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')
    const tregno=this.activateroute.snapshot.paramMap.get('regno')
    const ttype=this.activateroute.snapshot.paramMap.get('type')
    const tduration=this.activateroute.snapshot.paramMap.get('duration')
     this.email=String(temail)
     this.regno=String(tregno)
     this.type=String(ttype)
     this.duration=Number(tduration)
     //console.log(this.email)
    //  console.log(this.duration)
    //  console.log(this.regno)
    //  console.log(this.type)

     this.planService.GetPlan(this.regno,this.type,this.duration).subscribe((data:Iplan)=>{this.plandata=data})
     console.log(this.plandata)
    }

  addPolicy(){
    console.log("addpolicy started");
   this.planService.addpolicy(this.plandata,this.email,this.regno).subscribe(()=>{
    alert("Thank you For Buying a Insurance/you details are saved!!!")
    this.router.navigate(['/'])  
   })
  }

}

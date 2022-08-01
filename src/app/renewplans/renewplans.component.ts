import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Iplan } from '../iplan';


@Component({
  selector: 'app-renewplans',
  templateUrl: './renewplans.component.html',
  styleUrls: ['./renewplans.component.css']
})
export class RenewplansComponent implements OnInit {

  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    duration:0

  }
  policyId:number=0
  type:string='';
  duration=0;
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const tpolicyId=this.activateroute.snapshot.paramMap.get('policyId')
    this.policyId=Number(tpolicyId)
  }

  getPlanRenew(plan:Iplan){
    this.plandata=plan
     this.router.navigate(['/Renew/:policyId/:type/:duration', {policyId: this.policyId, type:this.plandata.type, duration:this.plandata.duration}])  
  
  }

}

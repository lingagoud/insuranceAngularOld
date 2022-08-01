import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Iplan } from '../iplan';

@Component({
  selector: 'app-icalc-show',
  templateUrl: './icalc-show.component.html',
  styleUrls: ['./icalc-show.component.css']
})
export class IcalcShowComponent implements OnInit {

  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    duration:0
  }
  typeofvehicle:string=''
  type:string=''
  duration:number=0
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const ttype=this.activateroute.snapshot.paramMap.get('type')
    const tduration=this.activateroute.snapshot.paramMap.get('duration')
    const ttypeofvehicle=this.activateroute.snapshot.paramMap.get('typeofvehicle')
    this.typeofvehicle=String(ttypeofvehicle)
    this.type=String(ttype)
    this.duration=Number(tduration)
    this.planService.GetPlanCalc(this.typeofvehicle,this.type,this.duration).subscribe((data:Iplan)=>{this.plandata=data})
     console.log(this.plandata)
  }
  BuyInsurance(){
    this.router.navigate(['/login']) 
  }
}

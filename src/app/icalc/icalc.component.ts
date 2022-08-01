import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Iplan } from '../iplan';

@Component({
  selector: 'app-icalc',
  templateUrl: './icalc.component.html',
  styleUrls: ['./icalc.component.css']
})
export class IcalcComponent implements OnInit {

  constructor(private router:Router,private activateroute:ActivatedRoute) { }

  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    duration:0

  }

  Age:number=0

  ngOnInit(): void {}

  getPlanCalc(plan:Iplan){
    this.plandata=plan
     this.router.navigate(['/Icalc/:typeofvehicle/:type/:duration', {typeofvehicle:this.plandata.typeofvehicle, type:this.plandata.type, duration:this.plandata.duration}])  
  }

}

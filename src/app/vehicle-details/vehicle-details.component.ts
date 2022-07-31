import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ivehicle } from '../ivehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})

export class VehicleDetailsComponent implements OnInit {
  email:string=""
  vehicledata:Ivehicle={
    ManufacturerName:'',
    Model:'',
    License:'',
    PurchaseDate:new Date(1000, 0, 0, 0, 0, 0, 0) ,
    RegistrationNumber:'',
    EngineNumber:'',
    ChassisNumber:'',
    Typeofvehicle:''
  }
  constructor(private router:Router,private activateroute:ActivatedRoute, private vehicleservice:VehicleService) { }

 

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')
    this.email=String(temail)
       
  }
  saveVehicle(vehicle:Ivehicle){
    this.vehicledata=vehicle
    this.vehicleservice.addVehicle(this.vehicledata,this.email).subscribe(()=>{
    this.router.navigate(['/Ibuy/vdetails/:email/:regno', {email: this.email, regno:this.vehicledata.RegistrationNumber}])  
  })
 
  }
}

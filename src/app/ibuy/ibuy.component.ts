import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-ibuy',
  templateUrl: './ibuy.component.html',
  styleUrls: ['./ibuy.component.css']
})
export class IbuyComponent implements OnInit {
  cpass:string=''
  customer:Customer={name:'',
    email:'',
    contactNumber:0,
    address:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:''}
  constructor(private route:Router,private cs:CustomerService) { }

  ngOnInit(): void {
  }
  saveCust(cust:Customer,pass:string){
    this.customer=cust
    this.cpass=pass
    if(this.cpass==this.customer.password){
    this.cs.registerUser(this.customer).subscribe(()=>{
    this.route.navigate(['Ibuy/vdetails/',{email: this.customer.email}])
  })
}else{
  alert("Password Mismatch Register Again!!")
  this.route.navigate(['Ibuy'])
}
  }

}

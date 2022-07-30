import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Ivehicle } from './ivehicle';
import { Observable } from 'rxjs';
import { catchError,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url:string="http://localhost:30267/user/BuyInsurance/"
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpClient:HttpClient) { }
 
   addVehicle(vehicle:Ivehicle,email:string):Observable<Ivehicle>{
     return this.httpClient.post<Ivehicle>(this.url+email,vehicle,this.httpOptions).pipe(catchError(this.HandleError))
   }
 
   HandleError(error:HttpErrorResponse){
     let errormessage=''
     errormessage=error.status+'\n'+error.statusText+error.error;
     alert(errormessage)
    return throwError(errormessage)
   }
}

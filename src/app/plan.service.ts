import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Iplan } from './iplan';
import { Observable } from 'rxjs';
import { catchError,throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url:string="http://localhost:30267/user/BuyInsurance/"
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpClient:HttpClient) { }
 
   getPlan(plan:Iplan,email:string,regno:string):Observable<Iplan>{
     return this.httpClient.post<Iplan>(this.url+email+'/'+regno,plan,this.httpOptions).pipe(catchError(this.HandleError))
   }

   addpolicy(plan:Iplan,email:string,regno:string):Observable<Iplan>{
    return this.httpClient.post<Iplan>(this.url+'addpolicy/'+email+'/'+regno+'',plan,this.httpOptions).pipe(catchError(this.HandleError))
  }

   HandleError(error:HttpErrorResponse){
     let errormessage=''
     errormessage=error.status+'\n'+error.statusText+error.error;
     alert(errormessage)
    return throwError(errormessage)
   }
  
}

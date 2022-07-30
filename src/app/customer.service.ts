import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url='http://localhost:52957/api/dept/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }
    
    registerUser(customer:Customer):Observable<Customer>{
      return this.httpclient.post<Customer>(this.url+"Register",customer,this.httpOptions).pipe(catchError(this.handleError));
    }
    userlogin(email:string,pass:string):Observable<Customer>{
      return this.httpclient.get<Customer>(this.url+"Login/"+email).pipe(catchError(this.handleError))
    }
    handleError(error:HttpErrorResponse){
      let errorMessage='';
      errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
      alert(errorMessage);
      return throwError(errorMessage)
    }
}

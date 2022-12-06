import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  title:any;
  constructor(private http: HttpClient) { }


  location() {
    return this.http.get<any>("https://demo.jobsoid.com/api/v1/locations")

  }

  department() {
    return this.http.get<any>("https://demo.jobsoid.com/api/v1/departments")


  }
  fetchdata(id:number){
    return this.http.get<any>("https://demo.jobsoid.com/api/v1/jobs/"+id );
  }

  function() {
    return this.http.get<any>("https://demo.jobsoid.com/api/v1/functions")
  }

  job() {
    return this.http.get<any>("https://demo.jobsoid.com/api/v1/jobs");
    
  }



}

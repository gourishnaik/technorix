import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import * as _ from "lodash";
interface dept {
  name: string;
  viewValue: string;
}
interface loc {
  name: string;
  viewValue: string;
}
interface myfunction {
  name: string;
  viewValue: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  result: any;
  term: any;
  list = [
    {
      name: 'Quality Assurance',
      quality: 'Quality Assurance',
      lead: 'Quality Assurance Lead',
    }
  ]
  datas = [
    {
      project: 'Project Manager',
      buisnessanalyst: 'Buisness Analyst',
      projectmanagment: 'project Management'
    }
  ]

  constructor(private api: DataserviceService) { }
  myemployee: any;
  mydata: any;
  functiondata:any;
  deptdata: any;
  job:any;
 
  department: dept[] = [];
  location: loc[] = [];
  functions: myfunction[] = []
 apiresponse:any=[];
 

  
  ngOnInit() {
    this.api.location().subscribe(res => {
      this.myemployee = res;
    //  console.log(this.myemployee);
    })
    
    this.api.department().subscribe(data => {
      this.deptdata = data;
    })
    this.api.function().subscribe(data => {
      this.functiondata = data;
    })
    this.api.job().subscribe(data=>{
      this.job =data;
      //this.apiresponse =data;
      console.log("job is",this.job)
  
    })

   
  }

  

 

}

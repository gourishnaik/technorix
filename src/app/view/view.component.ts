import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api: DataserviceService,private Activatedroute: ActivatedRoute) { }
  job:any;
  dataid:any;
  
  ngOnInit(): void {

    this.Activatedroute.paramMap.subscribe((param: Params) => {
          this.dataid = param.get('dataid');
         })
    this.api.fetchdata(this.dataid).subscribe((data:any)=>{
      this.job =data;
      console.log("api response  is",this.job)
    })

   }
  
}
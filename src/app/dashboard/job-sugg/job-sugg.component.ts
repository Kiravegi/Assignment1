import { Component, OnInit } from '@angular/core';
import { Retriveinfo } from 'src/app/retriveinfo.service';

@Component({
  selector: 'app-job-sugg',
  templateUrl: './job-sugg.component.html',
  styleUrls: ['./job-sugg.component.css']
})
export class JobSuggComponent implements OnInit {
  jobData: any;

  constructor( private reinfo : Retriveinfo) { }

  ngOnInit(): void {
    
    this.getDetails();
  }

getDetails() { 
  this.reinfo.getJobdata()
  .subscribe(res=>{
    this.jobData = res;
    console.log(this.jobData);
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Retriveinfo} from '../retriveinfo.service';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  regData: any;
  proData: any;
  constructor( private reinfo: Retriveinfo,public dialog:MatDialog ) { }

  ngOnInit(): void {
    this.getDetails();
    this.getProfile();
  }
  
  openDialog(){ 
    this.dialog.open(DialogComponent  );
  }

getDetails() { 
  this.reinfo.getData()
  .subscribe(res=>{
    this.regData = res;
    console.log(this.regData);
  })
}

getProfile() { 
  this.reinfo.getProData()
  .subscribe(res=>{
    this.proData = res;
    console.log(this.proData);
  })
}
  }


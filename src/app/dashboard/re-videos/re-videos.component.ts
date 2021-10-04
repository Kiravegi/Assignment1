import { Component, OnInit } from '@angular/core';
import { Retriveinfo } from 'src/app/retriveinfo.service';

@Component({
  selector: 'app-re-videos',
  templateUrl: './re-videos.component.html',
  styleUrls: ['./re-videos.component.css']
})
export class ReVideosComponent implements OnInit {
  recvid: any;
  constructor(private reinfo : Retriveinfo) { }

  ngOnInit(): void {
    
    this.getDetails();
  }

getDetails() { 
  this.reinfo.getRecvid()
  .subscribe(res=>{
    this.recvid = res;
    console.log(this.recvid);
  })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskResponse } from 'app/model/taskListResponse';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

 
  public _jsonURL = 'assets/sample/response.json';
  public apiUrl = 'http://5.161.42.108:5001/assignment';
  public taskResponseList:Array<TaskResponse>;


 constructor(private http: HttpClient) {
  //  this.getJSON().subscribe(data => {
  //   console.log(data);
  //  });


 }
 public getJSON() {
   this.http.get<TaskResponse[]>(this.apiUrl).subscribe((response:any)=>{ 
    this.taskResponseList= response;
    console.log(this.taskResponseList.length);
  
    },error=>{
      this.http.get<TaskResponse[]>(this._jsonURL).subscribe((response:any)=>{ 
        this.taskResponseList= response;
        console.log("Static loaded");
      });

    });
 
 }
 ngOnInit() {
    this.getJSON();
 }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-A',
  templateUrl: './A.component.html',
  styleUrls: ['./A.component.css']
})
export class AComponent implements OnInit {
  message:string
  sharedMessage:string
  constructor(private dataShared:DataService ,private http:HttpClient) { }

  ngOnInit() {
    this.dataShared.currentMessage.subscribe(message => this.message = message)

    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(
      res => 
      {
        console.log(res);
      }
    )
  }

  changeMessage()
  {
    this.dataShared.changeValueMessage(this.sharedMessage)
  }

}

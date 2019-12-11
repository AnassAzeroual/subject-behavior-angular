import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-A',
  templateUrl: './A.component.html',
  styleUrls: ['./A.component.css']
})
export class AComponent implements OnInit {
  message:string
  sharedMessage:string
  constructor(private dataShared:DataService) { }

  ngOnInit() {
    this.dataShared.currentMessage.subscribe(message => this.message = message)
  }

  changeMessage()
  {
    this.dataShared.changeValueMessage(this.sharedMessage)
  }

}

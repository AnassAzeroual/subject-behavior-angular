import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-C',
  templateUrl: './C.component.html',
  styleUrls: ['./C.component.css']
})
export class CComponent implements OnInit {
  message:string
  constructor(private dataShared:DataService) { }

  ngOnInit() {
    this.dataShared.currentMessage.subscribe(message => this.message = message)
  }

}

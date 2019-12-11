import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-B',
  templateUrl: './B.component.html',
  styleUrls: ['./B.component.css']
})
export class BComponent implements OnInit {
  message:string
  constructor(private dataShared:DataService) { }

  ngOnInit() {
    this.dataShared.currentMessage.subscribe(message => this.message = message)
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-D',
  templateUrl: './D.component.html',
  styleUrls: ['./D.component.css']
})
export class DComponent implements OnInit {
  message:string
  constructor(private dataShared:DataService) { }

  ngOnInit() {
    this.dataShared.currentMessage.subscribe(message => this.message = message)
  }

}

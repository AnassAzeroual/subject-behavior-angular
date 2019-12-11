import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private messageSource = new BehaviorSubject<string>('Default message');
 currentMessage = this.messageSource.asObservable();

 constructor() { }
 
 changeValueMessage(message:string) { this.messageSource.next(message) }

}

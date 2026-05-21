import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  handelEvent(event:any){
    console.log("fucntion call" + event.type);
    
  }
}

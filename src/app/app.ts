import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Events } from './events/events';
import { Custom } from './custom/custom';
import { Day2Task1 } from './day2-task1/day2-task1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Events,Custom,Day2Task1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=0;

  handelincrement(){
    this.count++;
  }
  handelidecrement(){
    if(this.count>0){
      this.count--;
    }
    }
    handelreset(){
      this.count=0;
    }
}

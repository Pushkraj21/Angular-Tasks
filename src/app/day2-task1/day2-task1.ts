import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day2-task1',
  imports: [CommonModule],
  templateUrl: './day2-task1.html',
  styleUrl: './day2-task1.css',
})
export class Day2Task1 {

  stud=["virat","rohit","dhavan","sachin"]

  loggedIn=false;
}

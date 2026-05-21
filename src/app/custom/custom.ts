import { Component } from '@angular/core';
import { AppHighlightDirective } from './highlight';


@Component({
  selector: 'app-custom',
  imports: [AppHighlightDirective],
  templateUrl: './custom.html',
  styleUrl: './custom.css',
  standalone: true
 
})
export class Custom {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Carlos";

  arr = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a:number = 0.234;
}

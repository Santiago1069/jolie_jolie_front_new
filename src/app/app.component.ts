import { Component, OnInit } from '@angular/core';

declare var $: any;
declare function jsMain([]): any;
declare function jsSlickCustom([]): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba-front-new';

  ngOnInit(): void {
      setTimeout(() => {
        jsMain($);
        jsSlickCustom($);
      }, 100);
  }
}

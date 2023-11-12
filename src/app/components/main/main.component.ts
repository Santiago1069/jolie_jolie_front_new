import { Component, OnInit } from '@angular/core';


declare var $: any;
declare function jsMain([]): any;
declare function jsSlickCustom([]): any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      jsMain($);
      jsSlickCustom($);
    }, 100);
  }



}

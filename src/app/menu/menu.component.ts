import {Component, OnInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  
  close() {
    document.getElementById("navD").style.width = "0";
  }

  open() {
    document.getElementById("navD").style.width = "250px";
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  list:Product[];

  constructor() { 
    this.list = JSON.parse(localStorage.getItem("product"));
    // this.list = [{pid:1, pname:"Colgate", price:50, stock:30}];
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  prod:Product;
  prodlist:Product[] = [];

  pid:number;
  pname:string;
  price:number;
  stock:number;

  constructor() { 
    this.prodlist = [];
  }

  ngOnInit(): void {
  }

  productadd(): void {
    this.prod = {pid:this.pid, pname:this.pname, price:this.price, stock:this.stock};
    // this.prod.pid =  this.pid;
    // this.prod.pname = this.pname;
    // this.prod.price = this.price;
    // this.prod.stock = this.stock;
    this.prodlist.push(this.prod);
    localStorage.setItem("product",JSON.stringify(this.prodlist));
    // console.log(this.prodlist[0]);
  }

}

import { Component, OnInit } from '@angular/core';
import { IProducts } from './Interface';
import { element } from 'protractor';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {

  products: IProducts[] = [];

  constructor() { }

  ngOnInit() {
  }

  getProductsFromChild(products: IProducts[]) {
    this.products = products;
  }

  getTotalStock() {
    let totalStock = 0;
    this.products.forEach(element => {
      totalStock += element.stock;
    });
    return totalStock;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(element => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

  getGrandTotal() {
    let grandTotal = 0;
    this.products.forEach(element => {
      grandTotal += (element.price * element.stock);
    });
    return grandTotal;
  }

}

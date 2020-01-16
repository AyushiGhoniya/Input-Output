import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IProducts } from '../Interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})

export class ProductDetailsComponent implements OnInit {

  productDetails: IProducts[] = [];

  @Output() sendToParent = new EventEmitter<IProducts[]>();

  constructor() { }

  ngOnInit() {
    this.productDetails = [
      {id: 1, title: "Oreo", price: 10, stock: 13},
      {id: 2, title: "Bourbon", price: 20, stock: 3},
      {id: 3, title: "20-20", price: 5, stock: 30},
      {id: 4, title: "Gooday", price: 25, stock: 2},
      {id: 5, title: "Treat", price: 30, stock: 16},
      {id: 6, title: "Marie Gold", price: 10, stock: 40},
      {id: 7, title: "Tiger", price: 5, stock: 4},
      {id: 8, title: "Dark Fantasy", price: 40, stock: 15},
      {id: 9, title: "Monaco", price: 5, stock: 17},
      {id: 10, title: "Parle-G", price: 5, stock: 21}
      ]

      this.sendToParent.emit(this.productDetails);
  }
 
}

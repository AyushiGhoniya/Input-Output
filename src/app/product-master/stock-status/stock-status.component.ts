import { Component, OnInit, Input, Output } from '@angular/core';
import { IProducts } from '../Interface';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  @Input() product: IProducts;
  @Output() stock:number;

  constructor() { }

  ngOnInit() {
  }
}

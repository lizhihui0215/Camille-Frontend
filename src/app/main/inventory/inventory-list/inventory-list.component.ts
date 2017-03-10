import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Product, Season} from "../../../core/product";
import {NotEmptyWaringDirective} from "../../../core/not-empty-waring.directive";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {

  products: Product[] = [Product.emptyProduct()];

  constructor() { }

  ngOnInit() {

  }

  deleteProduct(event, isLast){
    if (isLast && this.products[this.products.length-1].isEmpty() && this.products.length > 1){
      this.products.pop();
    }
  }

  test(){
    console.log('test');
  }

  addProduct(event, isLast){
    if (isLast){
      this.products.push(Product.emptyProduct())
    }
  }

  submitProducts(f){
    console.log(this.products);
  }



}

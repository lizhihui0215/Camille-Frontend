import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {Product} from "../../core/product";
import {ProductService} from "../../core/product.service";


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-input-list.component.html',
  styleUrls: ['./inventory-input-list.component.css'],
})
export class InventoryInputListComponent implements OnInit {

  products: [Product] = [Product.emptyProduct()];
  @Input() seasonDropDown: NgbDropdown;
  seasonChanged(test) {
    console.log(test);
  }

  constructor(private productServices: ProductService) { }

  ngOnInit() {

  }

  deleteProduct(event, index) {
    if (this.products.length > 1) {
      this.products.splice(index, 1);
    }
  }

  addProduct(event, isLast) {
    if (isLast) {
      this.products.push(Product.emptyProduct());
    }
  }

  submitProducts(f) {
    this.productServices.save(this.products);
  }



}

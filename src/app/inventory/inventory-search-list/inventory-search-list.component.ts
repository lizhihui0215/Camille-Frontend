import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ProductService} from '../../core/product.service';
import {Product} from '../../core/product';

@Component({
  selector: 'app-inventory-search-list',
  templateUrl: './inventory-search-list.component.html',
  styleUrls: ['./inventory-search-list.component.css']
})
export class InventorySearchListComponent implements OnInit {
  products: Product[] = [];

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {
    this.productService.fetchAll(this.authService.user.id).then(responseObject => {
      if (responseObject.code === 0) {
        this.products = responseObject.result;
      }
    });
  }

  deleteProduct(event, index) {
    const product = this.products[index];
    this.productService.delete(this.products[index]).then(response => {
     if (response.code === 0) {
       this.products.splice(this.products.indexOf(product), 1);
     }
    });
  }

  updateProducts(f) {
    this.productService.update(this.products);
  }


}

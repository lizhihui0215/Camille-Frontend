import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ProductService} from '../../core/product.service';
import {Product, Season} from '../../core/product';

@Component({
  selector: 'app-inventory-search-list',
  templateUrl: './inventory-search-list.component.html',
  styleUrls: ['./inventory-search-list.component.css']
})
export class InventorySearchListComponent implements OnInit {
  products: Product[] = [];

  @ViewChildren('inputs') inputs: QueryList<ElementRef>;

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
       const deletedIndex = this.products.indexOf(product);
       this.products.splice(deletedIndex, 1);
       this.inputs.toArray()[deletedIndex - 1].nativeElement.focus();
     }
    });
  }

  seasonChanged(season: string, product: Product) {
    switch (season) {
      case 'Spring':
        product.season = Season.Spring;
        break;
      case 'Summer':
        product.season = Season.Summer;
        break;
      case 'Autumn':
        product.season = Season.Autumn;
        break;
      case 'Winter':
        product.season = Season.Winter;
        break;
    }
  }

  season(product: Product): string {
    let season = '';
    switch (product.season) {
      case Season.None:
        break;
      case Season.Spring:
        season = 'Spring';
        break;
      case Season.Summer:
        season = 'Summer';
        break;
      case Season.Autumn:
        season = 'Autumn';
        break;
      case Season.Winter:
        season = 'Winter';
        break;
    }
    return season;
  }

  addProduct(event, isLast) {
    if (isLast) {
      this.products.push(Product.emptyProduct());
    }
  }

  updateProducts(f) {
    this.productService.update(this.products);
  }


}

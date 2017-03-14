import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, QueryList,
  ViewChildren
} from '@angular/core';
import {NgbDateStruct, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {Product, Season} from '../../core/product';
import {ProductService} from '../../core/product.service';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-input-list.component.html',
  styleUrls: ['./inventory-input-list.component.css'],
})
export class InventoryInputListComponent implements OnInit {

  products: [Product] = [Product.emptyProduct()];
  @ViewChildren('inputs') inputs: QueryList<ElementRef>;

  selectedStartDate: NgbDateStruct;

  selectStartDate(date: NgbDateStruct, product) {
    product.inDate = new Date(`${date.year}-${date.month}-${date.day}`);
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

  constructor(private productServices: ProductService) { }

  ngOnInit() {

  }

  deleteProduct(event, index) {
    if (this.products.length > 1) {
      this.products.splice(index, 1);
      this.products.splice(index, 1);
      this.inputs.toArray()[index - 1].nativeElement.focus();
    }
  }

  addProduct(event, isLast) {
    if (isLast) {
      this.products.push(Product.emptyProduct());
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

  commitProducts(f) {
    this.productServices.save(this.products);
  }
}

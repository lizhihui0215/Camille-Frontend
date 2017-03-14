import { Injectable } from '@angular/core';
import {Product} from './product';
import {ResponseObject} from './response-object';
import {Http} from '@angular/http';
import {handleError} from './auth.service';

@Injectable()
export class ProductService {

  private saveURL = 'http://localhost:8080/api/save/products';

  private fetchAllURL = 'http://localhost:8080/api/all/products';

  private updateAllURL = 'http://localhost:8080/api/update/products';

  private deleteURL = 'http://localhost:8080/api/delete/products';

  constructor(private http: Http) { }

  public save(products: [Product]): Promise<ResponseObject<string>> {
    return this.http.post(this.saveURL, products).toPromise()
      .then(response => response.json() as ResponseObject<string>)
      .catch(handleError);
  }

  public fetchAll(id: number): Promise<ResponseObject<[Product]>> {
    return this.http.post(this.fetchAllURL, {'id': id}).toPromise().then(response => {
      const responseObject = response.json() as ResponseObject<[Product]>;
      responseObject.result.forEach(product => {
        product.inDate = new Date(product.inDate);
      });
      return responseObject;
    }).catch(handleError);
  }

  update(products: Product[]):  Promise<ResponseObject<[String]>> {
    return this.http.post(this.updateAllURL, products).toPromise().then(response => {
      return response.json() as ResponseObject<String>;
    }).catch(handleError);
  }


  delete(product: Product) {
    return this.http.post(this.deleteURL, [product]).toPromise().then(response => {
      return response.json() as ResponseObject<String>;
    });
  }
}

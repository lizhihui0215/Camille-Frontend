import { Component } from '@angular/core';
import {Article} from "./article/article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];


  constructor() {
    this.articles = [];
  }

  addArticle (title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }
}


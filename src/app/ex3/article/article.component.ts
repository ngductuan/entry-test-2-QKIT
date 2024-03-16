import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  articles = [
    {
      title: 'Title 1',
      slug: 'title-1',
    },
    {
      title: 'Title 2',
      slug: 'title-2'
    },
  ];
}

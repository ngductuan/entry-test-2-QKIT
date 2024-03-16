import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ex3/home/home.component';
import { DetailsComponent } from './ex3/details/details.component';
import { ArticleComponent } from './ex3/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'articles',
    component: ArticleComponent,
  },
  {
    path: 'details/:slug',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

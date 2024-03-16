import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ex3/home/home.component';
import { DetailsComponent } from './ex3/details/details.component';
import { ArticleComponent } from './ex3/article/article.component';
import { FormComponent } from './ex4/form/form.component';
import { Com5Component } from './ex5/com-5/com-5.component';

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
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'companies',
    component: Com5Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

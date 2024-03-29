import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1AAComponent } from './ex1A/com-1-a-a/com-1-a-a.component';
import { Com1ABComponent } from './ex1A/com-1-a-b/com-1-a-b.component';
import { Com1BAComponent } from './ex1B/com-1-b-a/com-1-b-a.component';
import { Com1C1Component } from './ex1C/com-1-c-1/com-1-c-1.component';
import { Com1C2Component } from './ex1C/com-1-c-2/com-1-c-2.component';
import { Com1C1ChildComponent } from './ex1C/child/com-1-c-1-child/com-1-c-1-child.component';
import { Com1C2ChildComponent } from './ex1C/child/com-1-c-2-child/com-1-c-2-child.component';
import { Com1D1Component } from './ex1D/com-1-d-1/com-1-d-1.component';
import { Com1D1ChildComponent } from './ex1D/child/com-1-d-1-child/com-1-d-1-child.component';
import { Com1E1Component } from './ex1E/com-1-e-1/com-1-e-1.component';
import { Com1E2Component } from './ex1E/com-1-e-2/com-1-e-2.component';
import { SingleContentComponent } from './ex1F/single-content/single-content.component';
import { MultiContentComponent } from './ex1F/multi-content/multi-content.component';
import { ConditionalContentComponent } from './ex1F/conditional-content/conditional-content.component';
import { TabsComponent } from './ex1F/child/tabs/tabs.component';
import { Com2A1Component } from './ex2A/com-2-a-1/com-2-a-1.component';
import { Com2B1Component } from './ex2B/com-2-b-1/com-2-b-1.component';
import { Com2C1Component } from './ex2C/com-2-c-1/com-2-c-1.component';
import { Com2D1Component } from './ex2D/com-2-d-1/com-2-d-1.component';
import { FormatDate } from './ex2D/format-date.pipe';
import { AdultPipe } from './ex2D/adult.pipe';
import { Com2E1Component } from './ex2E/com-2-e-1/com-2-e-1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Com2F1Component } from './ex2F/com-2-f-1/com-2-f-1.component';
import { HomeComponent } from './ex3/home/home.component';
import { DetailsComponent } from './ex3/details/details.component';
import { ArticleComponent } from './ex3/article/article.component';
import { FormComponent } from './ex4/form/form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { Com5Component } from './ex5/com-5/com-5.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1AAComponent,
    Com1ABComponent,
    Com1BAComponent,
    Com1C1Component,
    Com1C2Component,
    Com1C1ChildComponent,
    Com1C2ChildComponent,
    Com1D1Component,
    Com1D1ChildComponent,
    Com1E1Component,
    Com1E2Component,
    SingleContentComponent,
    MultiContentComponent,
    ConditionalContentComponent,
    TabsComponent,
    Com2A1Component,
    Com2B1Component,
    Com2C1Component,
    Com2D1Component,
    FormatDate,
    AdultPipe,
    Com2E1Component,
    Com2F1Component,
    HomeComponent,
    DetailsComponent,
    ArticleComponent,
    FormComponent,
    Com5Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

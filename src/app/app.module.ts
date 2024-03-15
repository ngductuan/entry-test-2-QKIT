import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1AAComponent } from './ex1A/com-1-a-a/com-1-a-a.component';
import { Com1ABComponent } from './ex1A/com-1-a-b/com-1-a-b.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1AAComponent,
    Com1ABComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

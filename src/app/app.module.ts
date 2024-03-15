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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

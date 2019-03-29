import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BasicNgComponent } from './basic-ng/basic-ng.component';
import { ErrComponent } from './core/err/err.component';
import {ComposantsModule} from './composants/composants.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicNgComponent,
    ErrComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComposantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RencontresComponent } from './rencontres/rencontres.component';


@NgModule({
  declarations: [
    AppComponent,
    RencontresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStorageComponent } from './application/storage/add-storage/add-storage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddWordpressComponent } from './application/wordpress/add-wordpress/add-wordpress.component';
import { ViewWordpressComponent } from './application/wordpress/view-wordpress/view-wordpress.component'

@NgModule({
  declarations: [
    AppComponent,
    AddStorageComponent,
    AddWordpressComponent,
    ViewWordpressComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

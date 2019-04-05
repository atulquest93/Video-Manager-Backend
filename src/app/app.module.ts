import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStorageComponent } from './application/storage/add-storage/add-storage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddWordpressComponent } from './application/wordpress/add-wordpress/add-wordpress.component';
import { ViewWordpressComponent } from './application/wordpress/view-wordpress/view-wordpress.component';
import { ViewStorageComponent } from './application/storage/view-storage/view-storage.component';
import { ViewFilesComponent } from './application/files/view-files/view-files.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UploadFilesComponent } from './application/wordpress/upload-files/upload-files.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CrawlerComponent } from './application/crawler/crawler.component';
import { ViewQueueComponent } from './application/crawler/view-queue/view-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStorageComponent,
    AddWordpressComponent,
    ViewWordpressComponent,
    ViewStorageComponent,
    ViewFilesComponent,
    UploadFilesComponent,
    CrawlerComponent,
    ViewQueueComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AddStorageComponent } from '../application/storage/add-storage/add-storage.component';
import { AddWordpressComponent } from '../application/wordpress/add-wordpress/add-wordpress.component';
import { ViewWordpressComponent } from '../application/wordpress/view-wordpress/view-wordpress.component';
import { ViewStorageComponent } from '../application/storage/view-storage/view-storage.component';
import { UploadFilesComponent } from '../application/wordpress/upload-files/upload-files.component';
import { ViewFilesComponent } from '../application/files/view-files/view-files.component';
import { CrawlerComponent } from '../application/crawler/crawler.component';
import { ViewQueueComponent } from '../application/crawler/view-queue/view-queue.component';
import { ViewPostsComponent } from '../application/crawler/view-posts/view-posts.component';

const routes : Routes = [

  {
    path : '', component : AddStorageComponent
  }, {
    path : 'wordpress/addWordpress', component : AddWordpressComponent
  },{
    path : 'wordpress/viewWordpress', component : ViewWordpressComponent
  },{
    path : 'storage/addStorage', component : AddStorageComponent
  }, {
    path : 'storage/viewStorage', component : ViewStorageComponent
  },{
    path : 'wordpress/uploadFiles', component : UploadFilesComponent
  },{
    path : 'storage/files', component : ViewFilesComponent
  },{
    path : 'crawler', component : CrawlerComponent
  },{
    path : 'crawler/viewCrawlerQueue', component : ViewQueueComponent
  }, {
    path : 'crawler/viewPosts', component : ViewPostsComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports : [RouterModule]
})
export class AppRoutingModule { }

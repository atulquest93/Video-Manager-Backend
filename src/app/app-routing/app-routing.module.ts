import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AddStorageComponent } from '../application/storage/add-storage/add-storage.component';
import { AddWordpressComponent } from '../application/wordpress/add-wordpress/add-wordpress.component';
import { ViewWordpressComponent } from '../application/wordpress/view-wordpress/view-wordpress.component';

const routes : Routes = [

  {
    path : '', component : AddStorageComponent
  }, {
    path : 'wordpress/addWordpress', component : AddWordpressComponent
  },{
    path : 'wordpress/viewWordpress', component : ViewWordpressComponent
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

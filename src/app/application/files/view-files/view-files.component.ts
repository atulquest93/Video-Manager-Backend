import { Component, OnInit } from '@angular/core';

import { ServerDataSource } from 'ng2-smart-table';

import { HttpClient } from '@angular/common/http';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.css']
})
export class ViewFilesComponent implements OnInit {

  state = {
    connectedStorage : null, 
    selectedBucket : "Select Storage"
  }; 

  settings = {};

  source: ServerDataSource;

  constructor(http: HttpClient, private service : ManagerServiceService) {
    this.source = new ServerDataSource(http, { endPoint: this.service.getEndpoint('getStorageFiles') });
  }

  ngOnInit() {

    this.service.getConnectedStorage().subscribe(data => {
      this.state.connectedStorage = data;

      setTimeout(() => { 
        $('select').selectpicker();
      }, 2000);

    }, error => {
      alert("Unable to load connected Storage Accounts.");
    });
    this.settings = {
      actions: {
        edit: false,
        add: false,
        delete: false,
        position: false,
      },
      pager: {
        display: true,
        perPage: 20
      },
      columns: {
        id: {
          title: 'ID',
          filter: false
        },
        bucketName : {
          title : "Cloud Bucket"
        },
        filename: {
          title: 'File Name',
        },
        contentType: {
          title: 'Content Type',
          filter: true
        },
        size: {
          title: 'File Size',
          filter: true
        },
      },
    };
  }

  selectStorage(data){
    this.state.selectedBucket = data.split(" ")[1];
  }

}

import { Component, OnInit } from '@angular/core';

import { ServerDataSource } from 'ng2-smart-table';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.css']
})
export class ViewFilesComponent implements OnInit {

  settings = {};

  ngOnInit() {
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



  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:3000/getStorageFiles' });
  }

}

import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-queue',
  templateUrl: './view-queue.component.html',
  styleUrls: ['./view-queue.component.css']
})
export class ViewQueueComponent implements OnInit {

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
        url : {
          title : "Post Url",
          filter: false
        },
        crawler: {
          title: 'Crawler',
        },
        isProcessed: {
          title: 'Is Completed',
          filter: false
        },
        status: {
          title: 'Status',
          filter: true
        },
        addedTime : {
          title : "Added Time",
          filter: false
        },
        completedTime : {
          title : "Completion Time",
          filter: false
        }
      },
    };
  }



  source: ServerDataSource;

  constructor(http: HttpClient, private service : ManagerServiceService) {
    this.source = new ServerDataSource(http, { endPoint: this.service.getEndpoint('getCrawlerQueue') });
  }


}

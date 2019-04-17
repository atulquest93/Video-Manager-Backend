import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

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
        postedTo : {
          title : "Wordpress",
          filter: true
        },
        crawler: {
          title: 'Crawler',
          filter: true
        },
        storage: {
          title: 'Storage',
          filter: true
        },
        originalUrl: {
          title: 'Original URL',
          filter: true
        }
      },
    };
  }



  source: ServerDataSource;

  constructor(http: HttpClient, private service : ManagerServiceService) {
    this.source = new ServerDataSource(http, { endPoint: this.service.getEndpoint('getAutoPosts') });
  }


}

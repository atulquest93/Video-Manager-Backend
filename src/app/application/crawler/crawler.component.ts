import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.css']
})
export class CrawlerComponent implements OnInit {

  state = {
    crawlerList: null,
    connectedWpList: null,
    googleAccounts: null,
    isProcessComplete: false
  }

  constructor(private service: ManagerServiceService) { }

  ngOnInit() {

    this.service.getCrawlers().subscribe(data => {
      this.state.crawlerList = data;
    }, error => {
      alert("Unable to fetch Crawlers.");
    });

    this.service.getWordpress().subscribe(data => {
      this.state.connectedWpList = data;
    }, error => {
      alert("Unable to fetch Connected Wordpress.");
    });

    this.service.getConnectedStorage().subscribe(data => {
      this.state.googleAccounts = data;
      setTimeout(() => {
        $('select').selectpicker();
      }, 3000);
    }, error => {
      alert("Unable to load google storages.");
    });

  }


  addtoQueue(formData) {

    if (formData.form.valid) {

      let data = {
          url : formData.form.value.multiplevideoUrl.split("#"),
          storage : formData.form.value.storage,
          crawler : formData.form.value.crawler,
          wordpress : formData.form.value.wordpress
      };
      
      this.service.addtoCrawlerQueue(data).subscribe(data => {
          this.state.isProcessComplete = true;
          formData.form.reset();
      }, err => {
          alert("Unable to add to Queue");
      });

    }else{
      alert("Select all the required options.");
    }
  }
}

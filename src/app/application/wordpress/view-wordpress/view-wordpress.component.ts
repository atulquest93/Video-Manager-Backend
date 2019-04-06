import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-wordpress',
  templateUrl: './view-wordpress.component.html',
  styleUrls: ['./view-wordpress.component.css']
})
export class ViewWordpressComponent implements OnInit {

  state = {
    connectedWp: null,
    deleteSuccess: false,
    showUpdateeSuccess: false,
  }
  constructor(private service: ManagerServiceService) { }

  ngOnInit() {
    this.loadWordpress();
  }

  loadWordpress(){
    this.service.getWordpress().subscribe(data => {
      this.state.connectedWp = data;
    }, error => {
      alert("Backend API Issue. Unable to connect");
    });
  }

  reloadWordpressAccounts() {
    this.service.getWordpress().subscribe(data => {
      data.forEach(function (elem) {
        elem.isSetLimit = false;
        elem.limit = 0;
      });
      this.state.connectedWp = data;
    }, error => {
      alert("Backend API Issue. Unable to connect");
    });
  }

  deleteWordpress(id: any) {
    this.service.deleteWordpress({ id: id }).subscribe(data => {
      this.state.deleteSuccess = true;
      this.reloadWordpressAccounts();
    }, error => {
      alert("Unable to delete selected Wordpress account !");
    });
  }

  updateLimit(wp) {
    this.service.updateWordpress(wp).subscribe(data => {
      wp.isSetLimit = false;
      this.state.showUpdateeSuccess = true;
      this.loadWordpress();
    }, error => {
      alert("Error while updating limit");
    });
  }
}

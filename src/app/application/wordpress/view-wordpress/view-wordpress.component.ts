import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-wordpress',
  templateUrl: './view-wordpress.component.html',
  styleUrls: ['./view-wordpress.component.css']
})
export class ViewWordpressComponent implements OnInit {

  state = {
    connectedWp : null
  }
  constructor(private service : ManagerServiceService) { }

  ngOnInit() {
    this.service.getWordpress().subscribe(data => {
      this.state.connectedWp = data;
    }, error => {
      alert("Backend API Issue. Unable to connect");
    });
  }

}

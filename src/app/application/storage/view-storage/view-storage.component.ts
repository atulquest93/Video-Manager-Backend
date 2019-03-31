import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-storage',
  templateUrl: './view-storage.component.html',
  styleUrls: ['./view-storage.component.css']
})
export class ViewStorageComponent implements OnInit {

  state = {
    connectedStorages : []
  }
  constructor(private service : ManagerServiceService) { }

  ngOnInit() {
    this.service.getConnectedStorage().subscribe((data) => {
      
      this.state.connectedStorages = data;
      console.log(this.state.connectedStorages);
    });
  }

}

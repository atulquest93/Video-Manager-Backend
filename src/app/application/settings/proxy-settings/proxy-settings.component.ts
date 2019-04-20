import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-proxy-settings',
  templateUrl: './proxy-settings.component.html',
  styleUrls: ['./proxy-settings.component.css']
})
export class ProxySettingsComponent implements OnInit {

  state = {
    proxyResult : {},
    isAvailable : false,
    isHide : true,
    isChecked : false,
    proxyData : null,
    message : "Checking .. "
  };
  constructor(
    private service: ManagerServiceService
  ) { }


  ngOnInit() {
    setTimeout(() => {
      $('select').selectpicker();
    }, 1000);
  }

  checkProxy(formData){
    this.state.isAvailable = false;
    this.state.isHide = false;
    this.state.message = "Checking ...";
    if(formData.form.valid){
      this.state.proxyData = formData.form.value;
      this.service.checkPorxy(formData.form.value).subscribe(data => {
        this.state.proxyResult = data;
        this.state.isAvailable = true;
        this.state.isChecked = true;
      }, err => {
        alert("Unable to veirfy proxy !");
      });
    }
  }

  saveProxy(){
    this.state.isAvailable = false;
    this.state.isHide = false;
    if(this.state.isChecked){
      this.service.saveProxy(this.state.proxyData).subscribe(data => {
        this.state.message = "Proxy details updated.";
      }, err => {
        this.state.message = "Unable to save proxy !";
      });
    }else{
      this.state.message = "Kindly verify proxy first !";
    }
  }

}

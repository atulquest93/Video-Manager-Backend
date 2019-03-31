import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.css']
})
export class AddStorageComponent implements OnInit {

  fileToUpload: File = null;
  uploadedFileName : string = "";
  isUploadComplete = false;
  isProcessComplete = false;

  constructor(private managerService : ManagerServiceService) { }

  ngOnInit() {

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadedFileName = this.fileToUpload.name;
    console.log(this.uploadedFileName);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.managerService.postFile(this.fileToUpload).subscribe(data => {
        this.isUploadComplete = true;
      }, error => {
        console.log(error);
      });
  }

  addStorage(formObject){
    if(formObject.form.valid == true && this.isUploadComplete == true){

      formObject.form.value['uploadedFileName'] = this.uploadedFileName;

      this.managerService.saveStorage(formObject.form.value).subscribe(data => {
        this.isProcessComplete = true;
        formObject.form.reset();
      }, error => {
        console.log(error);
      });

    }else{
      alert("Kindly enter values for Fields.");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  fileToUpload;

  state = {
    fileToUpload: null,
    isUploadComplete: false,
    type: '',
    fileName: ''
  }

  constructor(private service: ManagerServiceService) { }

  ngOnInit() {

  }


  selectFileType(type: any) {
    this.state.type = type;
  }

  handleFileInput(files: FileList) {
    this.state.isUploadComplete = false;
    this.state.fileToUpload = files.item(0);
    this.state.fileName = this.state.fileToUpload.name;
    if (this.state.type.length < 2) {
      alert("Kindly select File Type first.");
    } else {
      this.uploadFileToActivity();
    }

  }

  uploadFileToActivity() {
    this.service.uploadFiles(this.state.fileToUpload, this.state.type, this.state.fileName)
      .subscribe(data => {
        this.state.isUploadComplete = true;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}

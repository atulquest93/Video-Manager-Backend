import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-add-wordpress',
  templateUrl: './add-wordpress.component.html',
  styleUrls: ['./add-wordpress.component.css']
})
export class AddWordpressComponent implements OnInit {

  constructor(private service  : ManagerServiceService) { }

  state = {
    title : null,
    descriptions : null,
    isCompleted : false,
  }

  ngOnInit() {
    $('select').selectpicker();
    this.service.getUploadedFiles('title').subscribe(data => {
      this.state.title = data;
    });
    this.service.getUploadedFiles('description').subscribe(data => {
      this.state.descriptions = data;
    });
  }

  addWordpress(formObject){
    if(formObject.form.valid){
        this.service.saveWordpress(formObject.form.value).subscribe(data => {
            this.state.isCompleted = false;
            formObject.form.reset();
        }, error => {
          alert("Error while adding wordpress.");
        });
    }
    console.log(formObject.form.value);
  }
}

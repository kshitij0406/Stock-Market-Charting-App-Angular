import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  SERVER_URL = "http://localhost:8080/stockprice/upload";
  uploadForm!: FormGroup;
  fileInputLabel!: string;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
     // this.uploadForm.get('profile').setValue(file);
      this.fileInputLabel = file.name;
    }
  }

  onSubmit() {
    const formData = new FormData();
    //formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(

      (res) => {
        console.log(res);
        alert("Upload Successful");
      },
      (err) => {
        console.log(err);
        alert("Upload Failed");
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FileUploadsService } from './../file-uploads.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  percentCompleted: number = 0;
  isMultipleUploaded = false;
  isSingleUploaded = false;
  urlAfterUpload = '';
  percentUploaded = [0];
  acceptedExtensions = "jpg, jpeg, bmp, png, wav, mp3, mp4";
  constructor(private fuService: FileUploadsService) {
  }

  ngOnInit(){

  }
  upload(event: Event) {
    console.log('---Uploading single file---');
    const file = event.target['files'][0];
    console.log(file.name);
    this.isSingleUploaded = false;
    this.urlAfterUpload = '';

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData)
    this.fuService.uploadWithProgress(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentCompleted = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.isSingleUploaded = true;
          this.urlAfterUpload = event.body.link;
        }
      });
  }
 
}

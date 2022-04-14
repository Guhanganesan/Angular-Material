import { Component } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { fileExtensionValidator } from './file-extension-validator.directive';
import { FileUploadsService } from './../file-uploads.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})

export class UploadFilesComponent  {


  percentCompleted: number = 0;
  isMultipleUploaded = false;
  isSingleUploaded = false;
  urlAfterUpload = '';
  acceptedExtensions = "jpg, jpeg, bmp, png, wav, mp3, mp4";
  constructor(private formBuilder: FormBuilder, private fuService: FileUploadsService) {
  }

  ngOnInit(){

  }

  /**
   * @param event 
   * Upload a single file
   */
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

  // initiate form array to add more files
  uploadForm = this.formBuilder.group({
    title: ['', Validators.required],
    filesToUpload: this.formBuilder.array([
      this.formBuilder.control('', [Validators.required, fileExtensionValidator(this.acceptedExtensions)])
    ])
  });

  /**
   * Get title of the Forms
   */
  get title(): FormControl {
    return this.uploadForm.get('title') as FormControl;
  }

  /**
   * Selected files to upload
   */
  get filesToUpload(): FormArray {
    return this.uploadForm.get('filesToUpload') as FormArray;
  }

  /**
   * Add More Files
   */
  addMoreFiles() {
    this.filesToUpload.push(this.formBuilder.control('',
      [Validators.required, fileExtensionValidator(this.acceptedExtensions)]));
  }

  /**
   * @param index 
   * delete files based on index
   */
  deleteFile(index: number) {
    this.filesToUpload.removeAt(index);
  }

 /**
  * Upload multiple files
  */
  onFormSubmit() {
    console.log('---Uploading multiple file---');
    this.isMultipleUploaded = false;
    for (let i = 0; i < this.filesToUpload.length && this.uploadForm.valid; i++) {
      const selectedFileList = (<HTMLInputElement>document.getElementById('file' + i)).files;
      const file = selectedFileList.item(0);
      this.uploadFile(file, i);
    }
    console.log(this.title.value);
  }

  /** 
   * @param file 
   * @param fileNum 
   * upload single file
   */
  uploadFile(file: File, fileNum: number) {
    const formData = new FormData();
    formData.append("file", file);
    this.fuService.uploadWithProgress(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event instanceof HttpResponse) {
          console.log(file.name + ', Size: ' + file.size + ', Uploaded URL: ' + event.body.link);
          this.fileUploadSuccess();
        }
      },
        err => console.log(err)
      );
  }

  /**
   * confirm the files has been uploaded successfully
   */
  fileUploadSuccess() {
    let flag = true;
    if (flag) {
      this.isMultipleUploaded = true;
    }
  }

  /**
   * Reset the form if you choose other files to upload
   */
  formReset() {
    this.uploadForm.reset();
    this.isMultipleUploaded = false;
  }
 
}

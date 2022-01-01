import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GreetingcardService } from '../greetingcard.service';

@Component({
  selector: 'app-admincard',
  templateUrl: './admincard.component.html',
  styleUrls: ['./admincard.component.css']
})
export class AdmincardComponent implements OnInit {

  msg:any;
  msg1:any;
  selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
  
    fileInfos?: Observable<any>;

    selectedFiles1?: FileList;
    currentFile1?: File;
    progress1 = 0;
    message1 = '';
  
    fileInfos1?: Observable<any>;

    constructor(private uploadService: GreetingcardService, private service:GreetingcardService) { }
  
    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
    ngOnInit(): void {
      this.fileInfos = this.uploadService.getFiles();
      this.fileInfos1 = this.uploadService.getFiles1();
    }
    upload(): void {
      this.progress = 0;
  
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
  
        if (file) {
          this.currentFile = file;
  
          this.uploadService.upload(this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadService.getFiles();
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
  
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
  
              this.currentFile = undefined;
            }
          });
        }
  
        this.selectedFiles = undefined;
      }
    }
    public delFile(name: any){
      let resp=this.service.deleteFile(name);
      resp.subscribe((data)=>this.msg=data);
    }




    selectFile1(event: any): void {
      this.selectedFiles1 = event.target.files;
    }
    upload1(): void {
      this.progress1 = 0;
  
      if (this.selectedFiles1) {
        const file1: File | null = this.selectedFiles1.item(0);
  
        if (file1) {
          this.currentFile1 = file1;
  
          this.uploadService.upload1(this.currentFile1).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress1 = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message1 = event.body.message;
                this.fileInfos1 = this.uploadService.getFiles1();
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress1 = 0;
  
              if (err.error && err.error.message) {
                this.message1 = err.error.message;
              } else {
                this.message1 = 'Could not upload the file!';
              }
  
              this.currentFile1 = undefined;
            }
          });
        }
  
        this.selectedFiles1 = undefined;
      }
    }

    public delFile1(name: any){
      let resp=this.service.deleteFile1(name);
      resp.subscribe((data)=>this.msg1=data);
    }
}

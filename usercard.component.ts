import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from '../ggreeting';
import { GreetingcardService } from '../greetingcard.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  msg:any;
  message:any;
  newstr:any;
  greeting: any= new Greeting("","","","","");
  fileInfos?: Observable<any>;
  fileInfos1?: Observable<any>;
  constructor(private uploadService: GreetingcardService,private service: GreetingcardService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.fileInfos1 = this.uploadService.getFiles1();
  }

  public select(a:string){ 
    this.greeting.attachment= a;
    this.msg="Card Template Selected";
  }

  public mail(){
    let resp=this.service.sendMail(this.greeting);
    resp.subscribe((data)=>this.message=data);
  }

}

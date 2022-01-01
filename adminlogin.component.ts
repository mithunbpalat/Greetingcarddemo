import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GreetingcardService } from '../greetingcard.service';
import { User } from '../guser';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  test : any = new User(0,"","","","");
  message:any;
  constructor(private service: GreetingcardService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public verify(tu: string,tp: string){
    let resp = this.service.login(tu,tp);
    resp.subscribe((data)=>this.message=data);
    if(tu && tp ){
      if(this.message == "authenticated successfully"){
      (<HTMLInputElement>document.getElementById("demo")).disabled=false;
      (<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
      (<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin Log into your account";
    }
  }
}
}

import { Component, OnInit } from '@angular/core';
import { GreetingcardService } from '../greetingcard.service';
import { User } from '../guser';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user: any= new User(0,"","","","");
  test: any= new User(0,"","","","");
  constructor(private service: GreetingcardService) { }

  ngOnInit(): void {
  }

  public searchById(tu:string){
    let resp=this.service.getUserByUsername(tu);
    resp.subscribe((data)=>this.user=data);
  }
  public te(au:string,tu:string,ap:string,tp:string){
    if(tu && tp ){
    if( tu==au && tp==ap){
      (<HTMLInputElement>document.getElementById("demo")).disabled=false;
      (<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
      (<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello User Log into your account";
    }
  }
}
}

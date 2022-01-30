import { Component, OnInit } from '@angular/core';
import { GreetingcardService } from '../greetingcard.service';
import { User } from '../guser';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  user : any= new User(0,"","","","");
  users:any;
  constructor(private service: GreetingcardService) { }

  ngOnInit(): void {
  }
  public userNow(){
    let resp = this.service.postUser(this.user);
    resp.subscribe((data)=>this.users=data);
  }
}

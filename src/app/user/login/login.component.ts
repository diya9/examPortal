import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: User[];
  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => this.user = data);
  }

  onLogin() { 
    console.log(this.user)
    this.user.forEach((data)=> {
      if(this.username === data.email){
        this.route.navigate([`/examPortal/${data.name}`])
      }
      else{
        alert("Please enter valid username or password")
      }
    })
  }
}

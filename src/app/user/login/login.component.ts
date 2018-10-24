import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: any;
  
  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => this.user = data);
  }

  onLogin() { 
    console.log(this.user)
    this.user.forEach((data)=> {
      if(this.username === data.email && this.password === data.password){
        this.dataService.setUserLoggedIn(true);
        this.route.navigate([`/examPortal/${data.name}`])
      }
      else{
        alert("Please enter valid username or password")
      }
    })
  }
}

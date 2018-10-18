import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit() {
  }

  saveUser(formValues: any){
    let newUser: User = <User>formValues;
    this.dataService.addUser(newUser).
      subscribe(data => console.log(data))
      this.route.navigate([''])
  }

}

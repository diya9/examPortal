import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
 
  constructor(private data: DataService){ }

  ngOnInit() {
    this.isLoggedIn = this.data.getUserLoggedIn();
  }
  
}

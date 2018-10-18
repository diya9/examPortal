import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  result: string;
  name: string;
  constructor(private dataService: DataService, private route: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.routes.snapshot.params['name'];
    this.result = this.routes.snapshot.params['result']
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  questions: Question;
  result: number = 0;
  name: string;
  constructor(private dataService: DataService, private route: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.routes.snapshot.params['name']
    this.dataService.getQuestions().subscribe(data => this.questions = data)
  }

  onClick(id,value){
    if(id === this.questions.id && value === this.questions.answer){
       this.result = this.result + 5;
    }
  }

  onSubmit() {
      console.log(this.result)
  }

}

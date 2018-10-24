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

  onClick(question,option){
    question.options.forEach((x) => {
      if(x.id !== option.id)
        x.selected = false;
    })
    //this.isCorrect(question);
  }

  /*isCorrect(question){
    question.options.every((x) => {
      if(x.selected === x.isAnswer)
        return this.result=this.result+5;
    })
  }*/

  onSubmit() {
     console.log(this.result)
     this.route.navigate([`/dashboard/${this.name}/${this.result}`])
  }
}

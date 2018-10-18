import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users')
  }

  getQuestions(): Observable<Question>{
    return this.http.get<Question>('http://localhost:3000/questions')
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
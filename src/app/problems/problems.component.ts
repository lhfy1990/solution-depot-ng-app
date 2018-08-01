import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Problem } from '../problem.model';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  private problems: Array<Problem>;
  private problem: Problem;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`/api/problems`)
      .subscribe((res) => {
        this.problems = JSON.parse(res["_body"]).map((problem)=> new Problem(problem));
      }, (err) => {
        let body: object = JSON.parse(err["_body"]);
        let message: object = {
          type: 'danger',
          text: `${err.status} ${err.statusText}. ${body['message']}`
        };
        console.log(message);
      });
  }

}

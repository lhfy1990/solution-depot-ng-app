import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Problem } from '../problem.model';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  @Input() problems: Array<Problem>;
  private problemList: Observable<Problem> = new Observable<Problem>();
  private page_size: number = 5;
  private page: number = 1;
  private problem: Problem;

  constructor() {
  }

  ngOnInit() {
  }

  private select = ($event, problem) => {
    this.problem = problem;
    console.log(this.problems);
    console.log($event);
  };


}

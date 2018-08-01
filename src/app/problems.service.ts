import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Problem } from './problem.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {
  currentProblem: Subject<Problem> = new BehaviorSubject<Problem>(null);

  constructor() { }

  public setCurrentProblem(newProblem: Problem): void {
    this.currentProblem.next(newProblem);
  }
}

export const ProblemsServiceInjectables: Array<any> = [
  ProblemsService
];

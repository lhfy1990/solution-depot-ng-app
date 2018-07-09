import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const UsersServiceInjectables: Array<any> = [
  UsersService
];

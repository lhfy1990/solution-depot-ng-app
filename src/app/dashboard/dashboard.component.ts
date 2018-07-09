import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private messages: string[] = [];
  private is_edit_user: boolean = false;
  private is_active_notebook: boolean = false;
  private user: User;
  private editedUser: User;

  constructor(private http: Http, public usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.currentUser.subscribe((newUser) => {
      this.user = newUser;
    });
    this.editedUser = new User();
  }

  private toggleEditUser(): void {
    if (this.is_edit_user) {
      this.http.put(`/api/users/${this.user._id}`, { update: { "$set": this.editedUser } })
        .subscribe((res) => {
          this.usersService.setCurrentUser(this.editedUser);
          this.is_edit_user = false;
          this.editedUser = new User();
        }, (err) => {
          let body: object = JSON.parse(err["_body"]);
          let message: object = {
            type: 'danger',
            text: `${err.status} ${err.statusText}. ${body['message']}`
          };
          this.pushMessage(message, 3000);
        });
    } else {
      this.editedUser = JSON.parse(JSON.stringify(this.user));
      this.is_edit_user = true;
    }
  }

  private pushMessage(message, delay): void {
    this.messages.push(message);
    console.log(message);
    setTimeout(() => {
      this.messages.splice(this.messages.indexOf(message), 1);
    }, delay);
  }

  private toggleNotebook(): void {
    console.log(this.is_active_notebook);
    if (this.is_active_notebook) {
      this.is_active_notebook = false;
    } else {
      this.is_active_notebook = true;
    }
  }
}

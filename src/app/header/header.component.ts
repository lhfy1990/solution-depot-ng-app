import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private is_active_burger: boolean = false;
  private is_active_modal: boolean = false;
  private is_signin: boolean = false;
  private user: User;
  private modal_message: string;
  private modal_user: User;

  constructor(private router: Router, private http: Http, public usersService: UsersService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.usersService.setCurrentUser(new User());
    this.usersService.currentUser.subscribe((newUser) => {
      this.user = newUser;
    });
    this.modal_user = new User();
  }

  private toggle_burger(): void {
    this.is_active_burger = !this.is_active_burger;
  }

  private signup(): void {
    this.is_active_modal = true;
    this.is_signin = false;
  }

  private signin(): void {
    this.is_active_modal = true;
    this.is_signin = true;
  }

  private signout(): void {
    this.usersService.setCurrentUser(new User());
  }

  private closeModal(): void {
    this.is_active_modal = false;
  }

  private submit(): void {
    let request: Observable<Response>;
    if (this.is_signin) {
      request = this.http.post(`/api/signin`, this.modal_user);
    } else {
      request = this.http.post('/api/signup', this.modal_user);
    }
    request.subscribe((res) => {
      let body: object = JSON.parse(res['_body']);
      console.log(body);
      let user: User = new User(body);
      console.log(user);
      this.usersService.setCurrentUser(user);
      this.closeModal();
      this.modal_user = new User();
    }, (err) => {
      let body: object = JSON.parse(err['_body']);
      this.modal_message = `${err.status} ${err.statusText}: ${body['message'] || ''}`;
    });
    // TODO: please implement
  }
}

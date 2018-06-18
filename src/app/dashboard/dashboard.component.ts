import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private messages: String[] = [];
  private isEditUser: Boolean = false;
  private user: Object = {};
  private editedUser: Object = {};

  constructor() { }

  ngOnInit() {
    this.user = {
      "_id": "tester",
      "nickname": "Tester Tester"
    };
  }

  toggleEditUser() {
    if (this.isEditUser) {
      this.pushMessage({
        "text": "new message",
        "type": "danger"
      }, 3000);
      this.isEditUser = false;
      /*$http({
        method: 'PUT',
        url: `/api/users/${this.user._id}`,
        data: {}
      })
        .then((res) => {
          console.log(res);
          this.isEditUser = false;
        })
        .catch((res) => {
          let message = {
            type: 'danger',
            text: `${res.status} ${res.statusText}. ${res.data.message}`
          };
          this.pushMessage(message, 3000);
        });*/
    } else {
      this.editedUser = JSON.parse(JSON.stringify(this.user));
      this.isEditUser = true;
    }
  }
  pushMessage(message, delay) {
    this.messages.push(message);
    console.log(message);
    setTimeout(() => {
      this.messages.splice(this.messages.indexOf(message), 1);
    }, delay);
  }
}

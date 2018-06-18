import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private is_active_burger: Boolean = false;
    private is_active_modal: Boolean = false;
    private is_signin: Boolean = false;

    constructor(private router: Router) {
        this.router = router;
    }

    ngOnInit() {
    }

    toggle_burger() {
        this.is_active_burger = !this.is_active_burger;
    }

    signup() {
        this.is_active_modal = true;
        this.is_signin = false;
        console.log('signup');
        // TODO: please implement
    }

    signin() {
        this.is_active_modal = true;
        this.is_signin = true;
        console.log('signin');
        // TODO: please implement
    }

    signout() {
        console.log('signout');
        // TODO: please implement
    }

    closeModal() {
        this.is_active_modal = false;
    }

    submit() {
        console.log('submit');
        // TODO: please implement
    }
}

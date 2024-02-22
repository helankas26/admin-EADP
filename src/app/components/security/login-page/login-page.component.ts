import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {response} from "express";
import {AuthService} from "../../services/auth/auth.service";
import {CookieManagerService} from "../../services/cookie-manager.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private cookieService: CookieManagerService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.cookieService.isTokenExists()) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.authService.getToken().subscribe(response => {
      this.cookieService.createToken(response.data);
      this.router.navigateByUrl('/');
    })
  }
}

import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: any = !!localStorage.getItem("username") ? localStorage.getItem("username") : "";
  alredyLogIn: boolean = !!localStorage.getItem("username");

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {

    this.loginService.username.subscribe(name => this.user = name);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  isFormValid: boolean = true;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.router.navigate(["/player-list"])
    }
  }



  onUserSubmit(form: NgForm) {

    if (form.valid) {
      this.isFormValid = true;
      this.loginService.login(form.value.username);
      // localStorage.setItem("username", form.value.username);
      this.router.navigate(["/player-list"])
    } else {
      this.isFormValid = false;
    }
  }
}

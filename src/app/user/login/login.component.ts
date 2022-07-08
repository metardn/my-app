import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    "username" : "",
    "password" : ""
  }
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe (
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard'])
      },
      err => console.log(err)
    )
  }

}

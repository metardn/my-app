import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';

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
  err : any
  
  constructor(private auth: AuthService, 
    private router: Router,
    private shared: SharedService
    ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe (
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard'])
        this.shared.setUserData(res)
      },
      err => {
        console.log(err)
        this.err = err
      }
    )
  }

}

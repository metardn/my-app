import { Component, OnInit } from '@angular/core';
import { SharedService } from '../user/shared.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData:any
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.userData = this.shared.getUserData()
  }

}

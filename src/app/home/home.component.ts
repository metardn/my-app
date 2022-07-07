import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  home_desc = "Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. "

  constructor () {}

  ngOnInit (): void {
  }

}

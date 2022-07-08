import { Component, OnInit } from '@angular/core';
import { StarsService } from '../stars.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  public star_list : any;
  constructor(private stars:StarsService) { 
    this.star_list = this.stars.getData()
  }

  ngOnInit(): void {
  }

}

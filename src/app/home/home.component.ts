import { Component, OnInit } from '@angular/core';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  home_desc = "Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. "
  testimonials : any

  constructor (private testimonial:TestimonialService) {}

  ngOnInit (): void {
      this.getDataTestimonial()
  }

  getDataTestimonial () {
    this.testimonial.getData().subscribe(res => {
    this.testimonials = res
    console.log(res)
    })
  }
}

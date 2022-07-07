import { Component, OnInit } from '@angular/core';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlide, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carouselCfg: NgbCarouselConfig) { }
  
  ngOnInit() {
    
  }

}

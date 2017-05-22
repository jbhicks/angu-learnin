import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlide, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

import { CarouselItem } from '../carousel-item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: CarouselItem[];
  constructor(private carouselCfg: NgbCarouselConfig) {
      this.items = [
        {isActive: true, srcUrl: 'http://placehold.it/1110x480', header: 'Bread & Pastry'},
        {isActive: false, srcUrl: 'http://placehold.it/1110x480', header: 'Seafood'},
        {isActive: false, srcUrl: 'http://placehold.it/1110x480', header: 'Fruits & Vegetables'}
      ];
      console.log(this.items);
 }
  
  ngOnInit() {
    
  }

}

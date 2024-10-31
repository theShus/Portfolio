import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PortfolioItem} from "../../../../models/models";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit{

  project: PortfolioItem | any;

  buttonsVisible = false
  currentSlideIndex = 0;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.project = history.state.project;
  }

  moveSlide(step: number) {
    const totalSlides = this.project.imageUrls.length;
    this.currentSlideIndex = (this.currentSlideIndex + step + totalSlides) % totalSlides; // Handle wrapping around
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}

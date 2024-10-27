import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PortfolioItem} from "../../../../models/models";
import {PortfolioService} from "../../../../services/portfolio.service";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit{

  portfolioItem: PortfolioItem | any

  buttonsVisible = false
  currentSlideIndex = 0;

  constructor(public router: Router, private portfolioService: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // Extract the id from the route
    this.portfolioItem = this.portfolioService.getPortfolioItemById(id)

    if (this.portfolioItem == undefined){
      this.router.navigate([''])
    }
  }

  moveSlide(step: number) {
    const totalSlides = this.portfolioItem.imageUrls.length;
    this.currentSlideIndex = (this.currentSlideIndex + step + totalSlides) % totalSlides; // Handle wrapping around
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

}

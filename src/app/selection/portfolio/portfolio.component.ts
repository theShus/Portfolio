import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PortfolioService} from "../../../services/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  selectedTab: string = 'All'; //todo uradi filtriranje projekata

  constructor(private router: Router, public portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.portfolioService.loadPortfolioItems()
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  openProjectDetails(projectId: number){
    this.router.navigate(['/portfolio-item', projectId])
  }

}

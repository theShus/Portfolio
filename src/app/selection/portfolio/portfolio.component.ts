import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PortfolioService} from "../../../services/portfolio.service";
import {PortfolioItem} from "../../../models/models";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  selectedTab: string = 'All';
  filteredItems: PortfolioItem[] = [];

  constructor(private router: Router, public portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioItems().subscribe(items => {
      this.portfolioService.portfolioItems = items;
      this.updateFilteredItems();
    });
  }

  openProjectDetails(projectId: number){
    const project = this.portfolioService.getPortfolioItemById(projectId)
    this.router.navigate(['/portfolio-item', projectId],  { state: { project } })
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.updateFilteredItems();
  }

  private updateFilteredItems() {
    if (this.selectedTab === 'All') {
      this.filteredItems = this.portfolioService.portfolioItems;
    } else {
      this.filteredItems = this.portfolioService.portfolioItems.filter(item => item.categoryLabel === this.selectedTab);
    }
  }

}

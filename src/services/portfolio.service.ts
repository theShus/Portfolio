import { Injectable } from '@angular/core';
import {PortfolioItem} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioItems: PortfolioItem[] = [];

  constructor() {}

  // Method to load data from JSON using fetch API
  loadPortfolioItems(): Promise<void> {//todo ne uspeva da parsira json
    return fetch('assets/portfolio-items.json')
      .then(response => response.json())
      .then(data => {
        this.portfolioItems = data.portfolioItems;  // Assuming the structure in the JSON has a key 'portfolioItems'
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  }

  // Method to get a single portfolio item by id
  getPortfolioItemById(id: number): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}

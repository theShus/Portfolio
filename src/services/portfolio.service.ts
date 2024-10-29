import {Injectable} from '@angular/core';
import {PortfolioItem} from "../models/models";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioItems: PortfolioItem[] = [];

  constructor(private httpClient: HttpClient) {
    // this.loadPortfolioItems()
  }

  loadPortfolioItems()  {
    this.fetchPortfolioItems().subscribe(items => {
      this.portfolioItems = items;
    });
  }

  fetchPortfolioItems(): Observable<PortfolioItem[]> {
    return this.httpClient.get<{ portfolioItems: PortfolioItem[] }>(environment.projectJson).pipe(
      map(response => response.portfolioItems)
    );
  }


  getPortfolioItemById(id: number): any{
    return this.portfolioItems.find(item => item.id === id)
  }

}

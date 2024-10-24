import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './selection/about/about.component';
import { ResumeComponent } from './selection/resume/resume.component';
import { PortfolioComponent } from './selection/portfolio/portfolio.component';
import { ContactComponent } from './selection/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioItemComponent } from './selection/portfolio/portfolio-item/portfolio-item.component';
import { HomeComponent } from './selection/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

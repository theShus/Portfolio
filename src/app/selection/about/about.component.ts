import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{

  jobTitle: string = "FullStack"


  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: [
        '<i class="fas fa-chevron-left" style="visibility: hidden;"></i>',
        '<i class="fas fa-chevron-right" style="visibility: hidden;"></i>'
      ],
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    });
  }
}

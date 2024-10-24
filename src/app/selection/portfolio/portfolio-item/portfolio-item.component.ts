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

  portfolioItem: PortfolioItem | undefined

  constructor(public router: Router, private portfolioService: PortfolioService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!;  // Extract the id from the route
    // this.portfolioItem = this.portfolioService.getPortfolioItemById(id)
  }


  // @Input()
  // projectTitle: string = "Place holder title"
  //
  // @Input()
  // projectLInk: string = "project.com"
  //
  // @Input()
  // publishedDate: string = "01.01.2000"
  //
  // @Input()
  // technologies = ['WordPress', 'CSS3', 'jQuery', 'PHP', 'HTML5', 'React', 'Angular'];
  //
  // @Input()
  // description: string = "\n" +
  //   "\n" +
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor magna, scelerisque vel dictum vitae, euismod consequat eros. Nam at leo tellus. Cras quis tristique nibh. Ut cursus eget urna sit amet volutpat. Donec fermentum maximus nisl, vitae convallis erat sagittis ut. Integer ac facilisis turpis, nec auctor lorem. In ac tristique sapien. Nullam congue at neque vitae congue.\n" +
  //   "\n" +
  //   "Donec sit amet pulvinar enim. Donec erat turpis, tempus non scelerisque nec, malesuada vitae ex. Suspendisse mauris lectus, pharetra quis tristique ut, faucibus non felis. Pellentesque rutrum eget sapien nec ornare. Curabitur sit amet lacus ut purus maximus iaculis non quis metus. Phasellus placerat nisl vel odio malesuada condimentum. Nunc augue nisl, hendrerit eget magna sit amet, interdum sollicitudin ante. Aliquam feugiat nec nunc in sodales. Nam ex mi, interdum at eros vel, feugiat egestas ante. Vivamus vitae mattis lectus. Nulla elit sem, auctor tincidunt orci vel, efficitur scelerisque dolor. Morbi dictum, ligula in laoreet aliquam, enim nunc auctor leo, ac luctus eros quam at nibh. Sed lorem quam, dapibus eu fringilla malesuada, venenatis malesuada nunc. Curabitur semper est vitae finibus lacinia. In cursus consectetur nisi, quis molestie turpis malesuada nec. Aliquam et leo dui.\n"

  buttonsVisible = false


  slides = [
    { imageUrl: 'assets/cuttle/cuttle1.png', altText: 'Slide asdf1' },
    { imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/11.jpg', altText: 'Slide 2' },
    { imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/12.jpg', altText: 'Slide 3' },
  ];

  currentSlideIndex = 0;




  moveSlide(step: number) {
    const totalSlides = this.slides.length;
    this.currentSlideIndex = (this.currentSlideIndex + step + totalSlides) % totalSlides; // Handle wrapping around
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }


}

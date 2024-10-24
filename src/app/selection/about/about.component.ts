import {AfterViewInit, Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {Router} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnInit {

  jobTitle: string = ""
  jobTitles: string[] = ['Full-Stack Developer', 'DevOps Engineer'];
  currentIndex: number = 0;
  fadeOut: boolean = false;

  @ViewChild('animatedText') animatedText!: ElementRef;
  constructor(private renderer: Renderer2, public router: Router) {
  }

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

  ngOnInit(): void {
    this.jobTitle = this.jobTitles[this.currentIndex]
    this.rotateJobTitles()
  }

  rotateJobTitles() {
    setInterval(() => {
      // Fade out
      this.renderer.setStyle(this.animatedText.nativeElement, 'opacity', '0');

      setTimeout(() => {
        // Change the job title after fade out
        this.currentIndex = (this.currentIndex + 1) % this.jobTitles.length;
        this.jobTitle = this.jobTitles[this.currentIndex];

        // Fade in
        this.renderer.setStyle(this.animatedText.nativeElement, 'opacity', '1');
      }, 500); // Wait for 0.5s (matching the CSS transition time) before showing new text

    }, 2500); // Change text every 3 seconds
  }

  downloadCv(){
    const link = document.createElement("a")
    link.href = 'src/assets/Luka_Jeremic_CV.pdf'
    link.download = "Luka_Jeremic_CV.pdf"
    link.click()
  }



}

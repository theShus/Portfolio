import { Component } from '@angular/core';
import {PortfolioItem} from "../../../models/models";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  selectedTab: string = 'All';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }



  portfolioItems: PortfolioItem[] = [
    {
      title: 'SoundCloud Audio',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/5-1.jpg',
      altText: 'SoundCloud Audio',
      categories: ['category_all', 'category_soundcloud'],
      linkUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664',
      linkType: 'lightbox',
      categoryLabel: 'SoundCloud'
    },
    {
      title: 'Media Project 2',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/1.jpg',
      altText: 'Media Project 2',
      categories: ['category_all', 'category_media'],
      linkUrl: 'https://lmpixels.com/wp/kerge-wp/project/media-project-2/',
      linkType: 'ajax-page-load',
      categoryLabel: 'Media'
    },
    {
      title: 'Vimeo Video 1',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/7.jpg',
      altText: 'Vimeo Video 1',
      categories: ['category_all', 'category_vimeo-videos'],
      linkUrl: 'https://player.vimeo.com/video/158284739',
      linkType: 'lightbox',
      categoryLabel: 'Vimeo Videos'
    },
    {
      title: 'Mockup Design 1',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/11.jpg',
      altText: 'Mockup Design 1',
      categories: ['category_all', 'category_mockups'],
      linkUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/11.jpg',
      linkType: 'lightbox',
      categoryLabel: 'Mockups'
    },
    {
      title: 'YouTube Video 1',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/12.jpg',
      altText: 'YouTube Video 1',
      categories: ['category_all', 'category_youtube-videos'],
      linkUrl: 'https://www.youtube.com/embed/bg0gv2YpIok',
      linkType: 'lightbox',
      categoryLabel: 'YouTube Videos'
    },
    {
      title: 'Media Project 1',
      imageUrl: 'https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2022/11/8.jpg',
      altText: 'Media Project 1',
      categories: ['category_all', 'category_media'],
      linkUrl: 'https://lmpixels.com/wp/kerge-wp/project/media-project-1/',
      linkType: 'ajax-page-load',
      categoryLabel: 'Media'
    }
  ];
}

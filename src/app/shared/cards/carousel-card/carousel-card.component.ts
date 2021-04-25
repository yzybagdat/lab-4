import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../core/objects/movie';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() movie: Movie;
  free: boolean;
  rating: string;
  @Input() click: boolean;

  constructor() { }

  ngOnInit(): void {
    this.click = false;
    this.setRating(this.movie.rating);
    this.free = (this.movie.discount === 100);
  }

  setRating(rating: number) {
    if (rating < 3) {
      this.rating = '#f6f6f6';
    } else if (rating < 5) {
      this.rating = '#686868';
    } else if (rating < 7) {
      this.rating = '#f6db3b';
    } else {
      this.rating = '#72f643';
    }
  }

}

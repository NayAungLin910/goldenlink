import { Component, Input } from '@angular/core';
import { SlideInterface } from '../types/slides.interface';

@Component({
  selector: 'gl-image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css'],
})
export class ImageSldierComponent {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;

  constructor() {}

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToPrevious(): void {
    const isLastSlide = this.currentIndex === 0;
    const newIndex = isLastSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  getCurrentImageInfo(): string {
    return this.slides[this.currentIndex].imageText;
  }
}

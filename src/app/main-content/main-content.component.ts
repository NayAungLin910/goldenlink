import { Component } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slides.interface';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ImageSliderModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  slides: SlideInterface[] = [
    { url: '/assets/planty.webp', title: 'plenty'},
    { url: '/assets/simple_house.webp', title: 'simple-house'},
    { url: '/assets/simple_room.webp', title: 'simple-room'},
    { url: '/assets/simple_table.webp', title: 'simple-table'},
    { url: '/assets/small_dogo.webp', title: 'simple-dogo'},
  ]
}

import { Component } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slides.interface';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  slides: SlideInterface[] = [
    { url: '/assets/planty.webp', title: 'plenty'},
    { url: '/assets/simple_house.webp', title: 'simple-house'},
    { url: '/assets/simple_room.webp', title: 'simple-room'},
    { url: '/assets/simple_table.webp', title: 'simple-table'},
    { url: '/assets/simple_dogo.webp', title: 'simple-dogo'},
  ]
}

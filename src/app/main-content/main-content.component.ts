import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slides.interface';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';
import { AosFadeContentComponent } from '../aos-fade-content/aos-fade-content.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aosContent } from '../aos-fade-content/types/aosContent.interface';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ImageSliderModule, AosFadeContentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/planty.webp', title: 'plenty' },
    { url: '/assets/simple_house.webp', title: 'simple-house' },
    { url: '/assets/simple_room.webp', title: 'simple-room' },
    { url: '/assets/simple_table.webp', title: 'simple-table' },
    { url: '/assets/small_dogo.webp', title: 'simple-dogo' },
  ];

  aosContents: aosContent[] = [
    {
      imageUrl: '/assets/planty.webp',
      imageName: 'plenty',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?',
      title: 'Pleny pleanty',
    },
    {
      imageUrl: '/assets/planty.webp',
      imageName: 'plenty',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquam, non qui eius aspernatur velit dolorem animi, magni illo porro quis atque nostrum. Aliquid molestiae totam pariatur. Quidem, accusantium officiis?',
      title: 'Pleny pleanty',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}

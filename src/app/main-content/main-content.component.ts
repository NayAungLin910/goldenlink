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
    {
      url: '/assets/images/subaru-seminar/gl and subaru.webp',
      title: 'Golden Link and SUBARU picture',
      imageText:
        "Teachers and students from Golden Link's and its official collaborative school, SUBARU located in Nagora.",
    },
    {
      url: '/assets/images/subaru-seminar/gl sensei and students.webp',
      title: 'Golden Link teachers and students',
      imageText: 'Golden Link teachers and students after the seminar.',
    },
    {
      url: '/assets/images/subaru-seminar/japanese senseis.webp',
      title:
        'SUBARU school officials and Golden Link Director Ms. Thin Htet Htet Aung',
      imageText:
        'SUBARU school officials and Golden Link Director Ms. Thin Htet Htet Aung during the school promotion seminar',
    },
    {
      url: '/assets/images/subaru-seminar/sensei emiy seminar.webp',
      title: 'simple-table',
      imageText: 'This iamge is interesting!',
    },
    {
      url: '/assets/small_dogo.webp',
      title: 'simple-dogo',
      imageText: 'This iamge is interesting!',
    },
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

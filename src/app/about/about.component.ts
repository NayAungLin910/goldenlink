import { Component } from '@angular/core';
import { AosFadeContentComponent } from '../aos-fade-content/aos-fade-content.component';
import { aosContent } from '../aos-fade-content/types/aosContent.interface';

@Component({
  selector: 'gl-about',
  standalone: true,
  imports: [AosFadeContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aosContents: aosContent[] = [
    {
      imageUrl: '/assets/images/subaru-seminar/gl sensei and students.webp',
      imageName: 'Teaching Youths',
      content:
        'At Golden Link, we are passionate about helping you achieve your Japanese language goals and opening doors to exciting opportunities in Japan. We are more than just a language school. We are your golden link to success in Japan.',
      title: '🙇‍♀️Welcome to ✨Golden Link Japanese & Other Languages Academy!',
    },
  ];
  constructor() {}
}

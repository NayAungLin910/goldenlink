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
    {
      imageUrl: '/assets/images/subaru-seminar/two-senseis-collage.webp',
      imageName: 'Sensei Emily',
      content: "Mrs. Thin Htet Htet Aung and Mr. Thura Aung, the two founders of the Golden Link Japanese & Other Languages Academy have many years of experience with not only the education that Myanmar citizens can pursue in Japan but also about various job oppotunities as well. They work with various well-resource job agencies and honorable Japanese language schools in Japan. They have already helped many youths' dreams of continuing their future dreams in Japan become reality.",
      title: 'Founders of Golden Link',
    },
    {
      imageUrl: '/assets/images/subaru-seminar/raising-hands-students-senseis.webp',
      imageName: 'Students and Senseis Raising Hands',
      content: "We believe that any person who has a dream of building their future in Japan should be given a chance. We strike to give the best services and trainings to our students to become proud and respectable people not only for not their famalies but also for their country, Myanmar. We strike to help build the reputation of Myanmar citizens to be the absolute best as it can be in the foreign land.",
      title: 'What We Believe In!',
    }
  ];
  constructor() {}
}

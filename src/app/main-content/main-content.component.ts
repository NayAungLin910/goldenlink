import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slides.interface';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';
import { AosFadeContentComponent } from '../aos-fade-content/aos-fade-content.component';
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
  mainTitle: string = "🌟Making bright youths' dreams come true!🌟";

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
      url: '/assets/images/subaru-seminar/sensei emily seminar.webp',
      title: 'Sensei Emily giving speech.',
      imageText:
        'Ms. Thin Htet Htet Aung, the founder of Golden Link, giving speech towards the students!',
    },
    {
      url: '/assets/images/subaru-seminar/sensei thura seminar.webp',
      title: 'Sensei Thura giving speech.',
      imageText:
        'Mr. Thura, the founder of Golden Link, giving speech towards the students!',
    },
  ];

  aosContents: aosContent[] = [
    {
      imageUrl: '/assets/images/subaru-seminar/teaching-youths.webp',
      imageName: 'Teaching Youths',
      content:
        'Golden Link Japanese & Other Languages Academy was found in 2023 by Mrs.Thin Htet Htet Aung and Mr.Thura Aung. The academy is now helping students achieve their derams of studying abroad in Japan and furthering their 🎓education through colleges and universities. Many of our students are already in 🗾Japan and having the time of their life by studying Japanese while also working.',
      title: 'About ✨Golden Link',
    },
    {
      imageUrl: '/assets/images/job-agency-visit/job-agency-agents-visiting-golden-link.webp',
      imageName: 'Job Agency Visiting Golden Link Class',
      content:
        'We teach our 👨‍🎓students not only basic japanese language lessons but also prepare for 🕵️‍♂️interviews for both school and job. We provide our students with chances to have interviews from various japanese language schools as well as job oppotunities of both tokutei and work visas.',
      title: 'Many ✨Oppotunities for Students!',
    },
    {
      imageUrl: '/assets/images/from-japan/students-in-japan-and-sensei-emily.webp',
      imageName: 'Students in Japan',
      content: 'There are already many students attending various Japanese language schools in Japan, who previously studied in ✨Golden Link.',
      title: 'Already Many Students in 🗾Japan!'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}

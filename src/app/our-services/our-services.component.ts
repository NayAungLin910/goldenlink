import { Component } from '@angular/core';
import { AosFadeContentComponent } from '../aos-fade-content/aos-fade-content.component';
import { aosContent } from '../aos-fade-content/types/aosContent.interface';

@Component({
  selector: 'gl-our-services',
  standalone: true,
  imports: [AosFadeContentComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  
  aosContents: aosContent[] = [
    {
      imageUrl: '/assets/images/services/Various-Japanese-Language-Schools.webp',
      imageName: 'Applying to Various Japanese Language School',
      content:
        "We primarily apply our students to Japanese language schools with best COE approval rates. Students may also choose to apply the schools they desire as well. We have various Japanese language schools that are working closely and openly with us.",
      title: 'Applying to Various Japanese Language School!',
    },
    {
      imageUrl: '/assets/images/job-agency-visit/students-job-agency-visit.webp',
      imageName: 'High-Quality Japanese Language Lectures',
      content:
        "We offer a variety of Japanese language courses tailored to different proficiency levels and learning goals. Our experienced and dedicated teachers use innovative and effective methods to help you master all aspects of the language, from speaking and listening to reading, writing and being always prepared for the interviews.",
      title: 'High-Quality Japanese Language Lectures!',
    },
    {
      imageUrl: '/assets/images/job-students-group/job-students-photo_1.webp',
      imageName: 'Help Students Find Tokutei and Work Visa Jobs',
      content:
        "We make sure our students willing to go to Japan with Tokutei jobs or work visa jobs find the suitable jobs they deserve. Not only we introduce them with job oppotunities, we also train them well so that they have a very high chance of passing the interview. We are proud to say that there are aleady many of our students who are currently now working in Japan!",
      title: 'High-Quality Japanese Language Lectures!',
    },
  ];

  constructor(){}
}

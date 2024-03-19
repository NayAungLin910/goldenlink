import { Component } from '@angular/core';
import { ContactInfo } from './types/contactInfo.type.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gl-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor() {}

  contactInfos: ContactInfo[] = [
    {
      iconClass: 'bi bi-telephone-fill',
      info: '01 7317348, 09 43055393',
    },
    {
      iconClass: 'bi bi-geo-alt-fill',
      info: 'No.78, 2nd Floor, Ohn Pin Street(upper), KyeeMyinDaing Township, Yangon',
    },
    {
      iconClass: 'bi bi-person-circle',
      info: 'Thin Htet Htet Aung (Training Director)',
    },
    {
      iconClass: 'bi bi-envelope',
      info: 'goldenlink787@gmail.com',
    },
    {
      iconClass: 'bi bi-facebook',
      info: 'Golden LINK Japanese & Other Language Training Centre',
      link: 'https://www.facebook.com/profile.php?id=100076045641732',
    }
  ];
}

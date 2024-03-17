import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { aosContent } from './types/aosContent.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gl-aos-fade-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aos-fade-content.component.html',
  styleUrl: './aos-fade-content.component.css'
})
export class AosFadeContentComponent implements OnInit {

  @Input() aosContents:aosContent[] = [];

  constructor() {}

  ngOnInit(): void {
      AOS.init();
  }

}

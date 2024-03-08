import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app.routing.module';

@Component({
  selector: 'gl-footer',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}

  // checks if the route provided is the same with the current route
  currentRoute(route: string) {
    return this.router.url === route;
  }
}

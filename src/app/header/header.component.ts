import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app.routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'gl-header',
  standalone: true,
  imports: [AppRoutingModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  show = false;

  constructor(private router: Router) {}

  // toggles navbar for mobile view
  toggleNavbar() {
    this.show = !this.show;
  }

  // checks if the route provided is the same with the current route
  currentRoute(route: string) {
    return this.router.url === route
  }
}

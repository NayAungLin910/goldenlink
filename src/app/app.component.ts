import { Component } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'gl-root',
  standalone: true,
  imports: [AppRoutingModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'goldenlink';
}

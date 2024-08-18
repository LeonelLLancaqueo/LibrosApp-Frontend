import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HomeComponent } from "./screens/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libros_app';
}

import { Component, Input } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card-libro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-libro.component.html',
  styleUrl: './card-libro.component.css'
})
export class CardLibroComponent {
  @Input() libro!: Libro;
}

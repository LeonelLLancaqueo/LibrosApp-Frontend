import { Component, Input } from '@angular/core';
import{CardAutor} from "../../interfaces/card-autor";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-autor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-autor.component.html',
  styleUrl: './card-autor.component.css'
})
export class CardAutorComponent {
  @Input() cardAutor!:  CardAutor;



}

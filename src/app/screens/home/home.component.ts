import { Component, inject } from '@angular/core';
import { CardAutor } from '../../interfaces/card-autor';
import { CommonModule } from '@angular/common';
import { CardAutorComponent } from "../../components/card-autor/card-autor.component";
import { CardingService } from '../../service/autorService/carding.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardAutorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listCardAutor: CardAutor[]= [];

  carding: CardingService= inject(CardingService); 

  constructor(){
    this.carding.getLibros().then(
      (card:CardAutor[])=>{
        this.listCardAutor= card; 
      }
    )
  }

}

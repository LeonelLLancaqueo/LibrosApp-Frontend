import { Component, inject, Input } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { CommonModule } from '@angular/common';
import { LibroService } from '../../service/libroService/libro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-details.component.html',
  styleUrl: './libro-details.component.css'
})
export class LibroDetailsComponent {
  router: ActivatedRoute= inject(ActivatedRoute);
  @Input() libro!: Libro; 
  libroService: LibroService= inject(LibroService);
  constructor(){
    this.libroService.getLibroById(this.router.snapshot.params['id']).then(
      (libroAux: Libro) => {this.libro= libroAux}
    );
  }
  
}

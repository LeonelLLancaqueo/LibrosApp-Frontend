import { Component, inject } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { LibroService } from '../../service/libroService/libro.service';
import { CommonModule } from '@angular/common';
import { CardLibroComponent } from "../../components/card-libro/card-libro.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, CardLibroComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  route: ActivatedRoute= inject(ActivatedRoute);
  listLibro: Libro[]= [];
  libroService: LibroService= inject(LibroService);
  constructor(){
    const idAutor= parseInt(this.route.snapshot.params['id'],10);
    this.libroService.getLibrosDeAutorById(idAutor).then(
      (libros: Libro[])=>{ this.listLibro= libros}
    );
  }
}

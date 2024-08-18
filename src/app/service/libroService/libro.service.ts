import { Injectable } from '@angular/core';
import { Libro } from '../../interfaces/libro'; 


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  url= "https://bookshop-bfc6.onrender.com/libro";
  constructor() { }

  async getLibro ():Promise<Libro[]>{
    const data= await fetch(`${this.url}/porAutor`);
    return (await data.json()) ?? [];
  }
  async getLibrosDeAutorById (id: number):Promise<Libro[]>{
    const data= await fetch(`${this.url}/porAutor/${id}`);
    return (await data.json()) ?? [];
  }
  async getLibroById (id: number):Promise<Libro>{
    const data= await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}

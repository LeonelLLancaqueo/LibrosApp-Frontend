import { Injectable } from '@angular/core';
import { CardAutor } from '../../interfaces/card-autor';

@Injectable({
  providedIn: 'root'
})
export class CardingService {
  url= "https://bookshop-bfc6.onrender.com/autor";
  constructor() {}

  async getLibros():Promise<CardAutor[]>{
    const data= await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getLibroById(id: number):Promise<CardAutor[]>{
    const data= await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LibrosComponent } from './screens/libros/libros.component';
import { LibroDetailsComponent } from './screens/libro-details/libro-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title:'Home page'
    },
    {
        path: 'libros/porAutor/:id',
        component: LibrosComponent,
        title:'Libros Autor'
    },
    {
        path: 'libros/detail/:id',
        component: LibroDetailsComponent,
        title:'Libro details'
    },
];

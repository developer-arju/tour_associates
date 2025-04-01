import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: async() => await import('./pages/home/home.component').then(p => p.HomeComponent),
    },
    {
        path: "favourites",
        loadComponent: async() => await import('./pages/favourites/favourites.component').then(p => p.FavouritesComponent),
    }
];

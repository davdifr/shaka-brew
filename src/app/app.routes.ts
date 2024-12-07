import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'bar',
    loadComponent: () => import('./pages/bar/bar.component'),
  },
  {
    path: 'beers',
    loadComponent: () => import('./pages/beers/beers.component'),
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component'),
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

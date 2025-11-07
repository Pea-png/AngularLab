import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/notfound/notfound.compoent';

export const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },

  // Lazy-load standalone component
  { 
    path: 'order', 
    loadComponent: () => import('./feature/order/order.component').then(m => m.OrderComponent) 
  },
  { 
    path: 'ads', 
    loadComponent: () => import('./feature/ads/ads.component').then(m => m.AdsComponent) 
  },
  
  { path: '**', component: NotFoundComponent }
];





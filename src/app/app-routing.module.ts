import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import ('./login/login.module').then(m => m.LoginPageModule)},
  { path: 'registro', loadChildren: () => import ('./registro/registro.module').then(m => m.RegistroPageModule)},
  { path: 'sotickets', loadChildren: () => import ('./sotickets/sotickets.module').then(m => m.SoticketsPageModule)},
  { path: 'layout', loadChildren: () => import ('./layout/layout.module').then(m => m.LayoutPageModule)},
  { path: 'calendario', loadChildren: () => import ('./calendario/calendario.module').then(m => m.CalendarioPageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form-ticket-personal', loadChildren: './form-ticket-personal/form-ticket-personal.module#FormTicketPersonalPageModule' }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

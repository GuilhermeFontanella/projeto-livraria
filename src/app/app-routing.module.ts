import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', 
    loadChildren:() => import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  { path: 'sign-up', 
    loadChildren:() => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  { path: 'home', 
    loadChildren:() => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'movimentation' },
  { path: 'movimentation',
    loadChildren:() => import('./pages/movimentation/movimentation.module').then((m) => m.MovimentationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

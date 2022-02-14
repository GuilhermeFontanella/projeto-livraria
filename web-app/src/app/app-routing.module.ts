import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', 
    loadChildren:() => import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  { path: 'sign-up', 
    loadChildren:() => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'movimentation' },
  { path: 'movimentation',
    loadChildren:() => import('./pages/movimentation/movimentation.module').then((m) => m.MovimentationModule)
  },
  { path: 'inventary',
    loadChildren:() => import('./pages/inventary/inventary.module').then((m) => m.InventaryModule)
  },
  { path: 'register-movement',
    loadChildren:() => import('./pages/register-movement/register-movement.module').then((m) => m.RegisterMovementModule)
  },
  { path: 'register-books',
    loadChildren:() => import('./pages/register-new-book/register-new-book.module').then((m) => m.RegisterNewBookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

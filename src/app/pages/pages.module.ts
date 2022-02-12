import { SignUpModule } from './sign-up/sign-up.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule
  ]
})
export class PagesModule { }

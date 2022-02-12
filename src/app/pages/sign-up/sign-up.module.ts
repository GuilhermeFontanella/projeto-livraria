import { SignUpComponent } from '../sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { SignUpRoutingModule } from './sign-up-routing.module';


@NgModule({
  declarations: [ SignUpComponent ],
  exports: [ SignUpComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }

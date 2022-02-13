import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterModule } from './../../components/footer/footer.module';
import { MenuModule } from '../../components/menu/menu.module';
import { RegisterMovementRoutingModule } from './register-movement-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMovementComponent } from './register-movement.component';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [ RegisterMovementComponent ],
  exports: [ RegisterMovementComponent ],
  imports: [
    CommonModule,
    RegisterMovementRoutingModule,
    MenuModule,
    FooterModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxMaskModule.forRoot()
  ]
})
export class RegisterMovementModule { }

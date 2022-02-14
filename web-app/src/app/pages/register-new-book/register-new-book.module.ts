import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterNewBookComponent } from './register-new-book.component';
import { RegisterNewBookRoutingModule } from './register-new-book-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FooterModule } from 'src/app/components/footer/footer.module';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [ RegisterNewBookComponent ],
  exports: [ RegisterNewBookComponent ],
  imports: [
    CommonModule,
    RegisterNewBookRoutingModule,
    MenuModule,
    FooterModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    DropdownModule
  ]
})
export class RegisterNewBookModule { }

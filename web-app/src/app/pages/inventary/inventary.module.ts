import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterModule } from './../../components/footer/footer.module';
import { MenuModule } from '../../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventaryComponent } from './inventary.component';
import { InventaryRoutingModule } from './inventary-routing.module';
import { TableModule } from 'src/app/components/table/table.module';



@NgModule({
  declarations: [ InventaryComponent ],
  exports:[ InventaryComponent ],
  imports: [
    CommonModule,
    InventaryRoutingModule,
    MenuModule,
    FooterModule,
    MatCardModule,
    MatButtonModule,
    TableModule
  ]
})
export class InventaryModule { }

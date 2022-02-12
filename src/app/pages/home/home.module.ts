import { ChartModule } from './../../components/chart/chart.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';



@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    MatCardModule,
    ChartModule
  ]
})
export class HomeModule { }

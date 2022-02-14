import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from './../../components/footer/footer.module';
import { MenuModule } from '../../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentationComponent } from './movimentation.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChartModule } from 'src/app/components/chart/chart.module';
import { IndicatorsModule } from 'src/app/components/indicators/indicators.module';
import { TableModule } from 'src/app/components/table/table.module';
import { MovimentationRoutingModule } from './movimentation-routing.module';



@NgModule({
  declarations: [ MovimentationComponent ],
  exports: [ MovimentationComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    ChartModule,
    MatDividerModule,
    IndicatorsModule,
    TableModule,
    MovimentationRoutingModule,
    MenuModule,
    FooterModule,
    MatButtonModule
  ]
})
export class MovimentationModule { }

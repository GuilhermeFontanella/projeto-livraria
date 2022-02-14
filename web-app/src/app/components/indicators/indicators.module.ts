import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsComponent } from './indicators.component';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ IndicatorsComponent ],
  exports: [ IndicatorsComponent ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatButtonModule
  ]
})
export class IndicatorsModule { }

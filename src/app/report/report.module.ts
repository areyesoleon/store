import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';

const components = [Report1Component,
  Report2Component,
  Report3Component];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ], exports: [...components]
})
export class ReportModule { }

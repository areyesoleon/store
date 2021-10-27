import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';

const routes: Routes = [{
  path: 'report',
  children: [{
    path: '1',
    component: Report1Component
  }, {
    path: '2',
    component: Report2Component
  }, {
    path: '3',
    component: Report3Component
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

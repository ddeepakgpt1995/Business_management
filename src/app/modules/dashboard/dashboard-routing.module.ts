import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcmpComponent } from 'src/app/layout/dashboardCmp/dashboardcmp.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

const routes: Routes = [
  {path:'',component:DashboardcmpComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

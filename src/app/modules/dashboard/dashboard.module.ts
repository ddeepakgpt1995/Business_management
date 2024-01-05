import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { DashboardcmpComponent } from 'src/app/layout/dashboardCmp/dashboardcmp.component';
import { SidenavbarComponent } from 'src/app/layout/side-navbar/sidenavbar.component';
import { MatModuleModule } from '../shared/modules/mat-module/mat-module.module';
import { PrimeNgModule } from '../shared/modules/prime-ng/prime-ng.module';
 const components=[
  HeaderComponent,
  FooterComponent,
  DashboardcmpComponent,
  SidenavbarComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatModuleModule, 
    PrimeNgModule
  
  ],
  exports:[
    // components --> no need to export because no these compoents are not required outside of this feature module
  ]
})
export class DashboardModule {
  constructor(){
    console.log("dashboard module")
  }
 }

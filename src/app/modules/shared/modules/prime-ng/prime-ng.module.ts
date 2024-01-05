import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
const content=[
  ButtonModule,
  SidebarModule,
  AvatarModule
]

@NgModule({
  declarations: [],
  imports: content,
  exports:content
})
export class PrimeNgModule { }

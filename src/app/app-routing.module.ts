import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { allRoutes } from './modules/shared/routes/routes';

const routes: Routes = [
  {path:'', children:allRoutes}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

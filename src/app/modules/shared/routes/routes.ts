import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthLayoutComponent } from "src/app/auth/auth-layout/auth-layout.component";

export const allRoutes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  //login form
  {
    path: 'auth', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AuthLayoutComponent },
      { path: 'register', component: AuthLayoutComponent },]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module')
        .then(
          (m) => m.DashboardModule
        )
  },
]

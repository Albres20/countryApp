import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactanosPageComponent } from './shared/pages/contactanos-page/contactanos-page.component';
import { CountryModule } from './countries/countries.module';

const routes:Routes=[
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contactanos',
    component:ContactanosPageComponent
  },
  {
    path:'countries',
    loadChildren:()=> import ('./countries/countries.module').then(m=>m.CountryModule)
  },
  {
    path:'**',
    redirectTo:'countries'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

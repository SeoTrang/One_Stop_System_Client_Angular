import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from '../layout/layout.component';

const routes : Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'service',
        component: ServiceComponent
      },
      {
        path:'support',
        component: SupportComponent
      },
      
    ]
  },
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicRoutingModule { }

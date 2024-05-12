import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../core/guards/module.guard';

const routes : Routes = [
  {
    path:'',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
    
        path: 'create-document/:service_id',
        component: CreateDocumentComponent
      }
    ]
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateRoutingModule { }

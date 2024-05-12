
// PublicModule.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableModule } from 'primeng/table';
// SharedModule import vào đây
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../core/services/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    SupportComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MultiSelectModule,
    FormsModule,
    NzCarouselModule,
    NzTableModule,
    SharedModule ,// Import SharedModule ở đây
    TableModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthService
  ]
})
export class PublicModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    CreateDocumentComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    CheckboxModule
    
  ]
})
export class PrivateModule { }

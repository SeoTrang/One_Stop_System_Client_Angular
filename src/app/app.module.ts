import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/public/home/home.component';
import { DetailPostComponent } from './modules/private/post/detail-post/detail-post.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { LayoutComponent } from './modules/layout/layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorsService } from './core/services/interceptors.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserInfoComponent } from './modules/shared/components/user-info/user-info.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmService } from './core/services/confirm.service';
import { ConfirmationService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    DetailPostComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzDrawerModule,
    HttpClientModule,
    ToastModule,
    OverlayPanelModule,
    ConfirmDialogModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS , useClass : InterceptorsService , multi : true },
    MessageService,
    ConfirmService,
    ConfirmationService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

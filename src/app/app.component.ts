import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './core/services/loading.service';
import { NotificationService } from './core/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  private subscriptions = new Subscription();
  title = 'client';
  constructor(
    private primengConfig: PrimeNGConfig,
    public loadingService: LoadingService,
    private messageService : MessageService ,
		private notification : NotificationService ,
  ){
    const observerOnPushNotification = this.notification.onAppToastMessage.subscribe( toast => this.messageService.add( { severity : toast.type , summary : toast.head , detail : toast.body , life : 3000 } ) );
		this.subscriptions.add( observerOnPushNotification );
  }
  

  ngOnInit() {
    
    this.primengConfig.ripple = true;
  }
}

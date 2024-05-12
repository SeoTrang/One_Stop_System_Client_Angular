import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  visible = false;
  user?: User | null;

  constructor(
    private authService: AuthService
  ){}
  ngOnInit(): void {
    this.onLoadUserData();

  }

  onLoadUserData():void{
    this.user = this.authService.getUserInfo();
    console.log(this.user);
    
  }


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  onLogout(){
    
  }
}

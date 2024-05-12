import { Component , NgZone , OnDestroy, OnInit , TemplateRef } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute , Router , Params } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { APP_CONFIGS } from '../../../../environments/environment';
import { UserSignIn } from '../../../core/models/auth';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  showEmailInvalid = false;
  params? : Params;
  isLoading = true;
  loginEvent$ = new Subject<UserSignIn>();

  loginForm : FormGroup = this.formBuilder.group( {
		identifier : [ 'DTC19H4801030042' , Validators.required] ,
		password : [ '' , Validators.required ]
	} );

  subscriptions = new Subscription();
  constructor(
    private formBuilder : FormBuilder ,
    private title : Title ,
		private auth : AuthService ,
    private router : Router ,
  )
  {
    const observerLogin$         = this.loginEvent$.pipe( debounceTime( 100 ) ).subscribe( info => this.checkLogin( info ) );
    this.subscriptions.add( observerLogin$ );
    // const test = this.loginEvent$.subscribe( info => this.checkLogin( info ) );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    // throw new Error('Method not implemented.');

  }

  ngOnInit() : void {
		void this.checkUserLoginStatus();
	}

  async checkUserLoginStatus() {
		if ( this.auth.isLoggedIn() ) {
			const redirect  = this.params && this.params.hasOwnProperty( 'redirect' ) ? this.params[ 'redirect' ] : APP_CONFIGS.defaultRedirect;
			// const pageTitle = APP_CONFIGS.pageTitle || 'admin area';
			// this.title.setTitle( pageTitle );
			// await this.router.navigate( [ redirect ] , { queryParams : this.params } );
			await this.router.navigate( [redirect] );
			this.isLoading = false;
		} else {
			this.title.setTitle( 'Login Account' );
			this.isLoading = false;
		}
	}

  async btnSignIn( ) {
		// console.log(this.loginForm.value);
		// console.log(this.loginForm.value.username);
		// console.log(this.loginForm.value.password);
		
		if ( this.isLoading ) {
			return;
		}
		if (  this.loginForm.valid ) {
			const signInfo = {
				identifier : this.loginForm.controls[ 'identifier' ].value ,
				password : this.loginForm.controls[ 'password' ].value
			};
			this.loginEvent$.next( signInfo );
		} 
	}

	checkLogin( info : UserSignIn ) {
		this.isLoading                    = true;
		// this.currentLoginButton.isLoading = true;
		this.auth.login( info ).subscribe( {
			next  : logged => {
				// this.currentLoginButton.isLoading = false;
				void this.checkUserLoginStatus();
			} ,
			error : error => {
				this.isLoading                    = false;
				// this.currentLoginButton.isLoading = false;
			}
		} );
	}


}

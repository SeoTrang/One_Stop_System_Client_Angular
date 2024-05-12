import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot , CanActivate , CanActivateChild , CanActivateFn, Router , RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
  })
  class PermissionsService {
  
	constructor(private router: Router, private auth: AuthService) {}
  
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		//your logic goes here
		const queryParams = { redirect : state.url };
		if ( !this.auth.isLoggedIn() ) {
			void this.router.navigate( [ '/login' ] , { queryParams } );
			return false;
		}
		
		// if ( !this.auth.useCases || this.auth.useCases.length === 0 ) {
		// 	void this.router.navigate( [ 'unauthorized' ] );
		// 	return false;
		// }


		return true;
	}
  }
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
	return inject(PermissionsService).canActivate(next, state);
  }
// export class ModuleGuard implements CanActivate {
	
// 	constructor(
// 		private auth : AuthService ,
// 		private router : Router,
		

// 	) { }

// 	canActivate( route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// 		const queryParams = { redirect : state.url };
// 		if ( !this.auth.isLoggedIn() ) {
// 			void this.router.navigate( [ '/login' ] , { queryParams } );
// 			return false;
// 		}
		
// 		// if ( !this.auth.useCases || this.auth.useCases.length === 0 ) {
// 		// 	void this.router.navigate( [ 'unauthorized' ] );
// 		// 	return false;
// 		// }


// 		return true;
// 	}
// }

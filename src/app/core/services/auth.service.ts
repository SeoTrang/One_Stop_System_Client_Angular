import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Token, UserSignIn } from "../models/auth";
import { BehaviorSubject, catchError, Observable, of, switchMap, tap } from "rxjs";
import { ACCESS_TOKEN, ENCRYPT_KEY, environment, EXPIRED_KEY, REFRESH_TOKEN, USER_KEY } from "../../../environments/environment";
import * as CryptoJS from 'crypto-js';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private jwtHelper = new JwtHelperService();

    private onSignIn$ = new BehaviorSubject<string>("");

    private _user: User|null = null;

    private onSetUser$ = new BehaviorSubject<User|null>(null);
    
    constructor(
        private http: HttpClient
    ){}


    encryptData(data: string): string {
        try {
          return CryptoJS.AES.encrypt(data, ENCRYPT_KEY).toString();
        } catch (e) {
          return '';
        }
      }


      decryptData(data: string): string {
        try {
          const bytes = CryptoJS.AES.decrypt(data, ENCRYPT_KEY);
          if (bytes.toString()) {
            return bytes.toString(CryptoJS.enc.Utf8);
          }
          return data;
        } catch (e) {
          return '';
        }
      }


    // callRefreshToken() {
    //     const url = environment.getRoute('refresh-token');
    //     return this.http
    //       .post<Token>(url, { refresh_token: this.refreshToken })
    //       .pipe(tap((token) => (this.accessToken = token.access_token)));
    //   }
    get accessToken(): string {
        return localStorage.getItem(ACCESS_TOKEN) || "";
    }
    
    set accessToken(token: string) {
        console.log('set accessToken', token);
    
        localStorage.setItem(ACCESS_TOKEN, token);
    }

    get refreshToken(): string {
        return localStorage.getItem(REFRESH_TOKEN) || "";
      }
    
    set refreshToken(token: string) {
        console.log('set refreshToken', token);
        localStorage.setItem(REFRESH_TOKEN, token);
    }

    isLoggedIn(): boolean {
      let isLoggedIn: boolean;
      if (this.refreshToken) {
        // isLoggedIn = this.accessToken && !this.jwtHelper.isTokenExpired( this.accessToken );
        isLoggedIn = !!this.accessToken;
      } else {
        const time = localStorage.getItem(EXPIRED_KEY);
        const expired = time ? new Date(time) : new Date();
        isLoggedIn = expired && expired > new Date();
      }
      return isLoggedIn;
    }

    setUserInfo(user: any) {
        const encrypt = this.encryptData(JSON.stringify(user));
        localStorage.setItem(USER_KEY, encrypt);
    }

    getUserInfo(): User | null {
        if(this._user) return this._user;
        const encrypt = localStorage.getItem(USER_KEY);
        if (encrypt) {
          const decryptedData = this.decryptData(encrypt);
          return JSON.parse(decryptedData);
        }
        return null; // Trả về null nếu không có dữ liệu trong localStorage
      }

    get user(): User | null{
        return this._user;
      }
    
    set user(user: User) {
        this._user = JSON.parse(JSON.stringify(user));
        // if (user) {
        // //   const none = new Date().valueOf();
        //   this._user.avatar = user.avatar
        //     ? user.avatar
        //     : '../../assets/images/a_none.jpg';
        //   this.onSetUser$.next(this._user);
        // }
      }

      updateUser(user: User) {
        console.log(user);
    
        this.user = user;
        const encrypt = this.encryptData(JSON.stringify(user));
        localStorage.setItem(USER_KEY, encrypt);
      }
    setUserMetaConfig(user: any) {
        console.log(user);
        this.setUserInfo(user);
        this.user = user;
      }


    private saveToken(token: Token): boolean {
        console.log(token);
    
        // this.updateUser( auth.user );
        // const { data } : { data : User } = this.jwtHelper.decodeToken( token.access_token );
        const extracted = this.jwtHelper.decodeToken(token.access_token);
        console.log('extracted jwt: ', extracted);
    
        // this.updateUser( extracted.data );
        console.log(token);
    
        this.accessToken = token.access_token;
        this.refreshToken = token.refresh_token;
        // localStorage.removeItem(EXPIRED_KEY);
        return true;
      }

    login(user: UserSignIn): Observable<boolean> {
      console.log('usersignin : ');
      console.log(user);
      
      
        const url = environment.api + '/auth/login';
        return this.http.post<Token>(url, user).pipe(
          switchMap((auth) => this.startSession(auth)),
          catchError(() => of(false))
        );
    }

    private startSession(auth: Token): Observable<boolean> {
        if (auth.hasOwnProperty('access_token')) {
         
          console.log(auth.hasOwnProperty('access_token'));
    
          this.saveToken(auth as Token);
    
          this.onSignIn$.next(auth['access_token']);
    
          const url = environment.api + '/users/profile';
          this.http
            .get<any>(url)
            .pipe(
              tap((res: Response) => this.setUserMetaConfig(res)),
              catchError(() => of(false))
            )
            .subscribe();
        } 
        return of(true);
    }
}
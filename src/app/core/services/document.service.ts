import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})


export class DocumentService{
    constructor(
        private http: HttpClient
    ){}

    createDocument(data : any): Observable<any>{
        return this.http.post<any>(environment.api + '/document',{...data})
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable(
    {
        providedIn: 'root',
    }
)

export class ServiceService{
    constructor(
        private http: HttpClient
    ){}

    getAllServices(): Observable<any[]>{
        return this.http.get<any[]>(environment.api+'/service');
    }

    getOneById(id: number) : Observable<any>{
        return this.http.get<any>(environment.api+'/service/'+id);
    }
}

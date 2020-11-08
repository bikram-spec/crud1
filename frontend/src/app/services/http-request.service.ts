import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service'


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  readonly rooturl;

  constructor(private http:HttpClient,private token:LocalStorageService) { 
    this.rooturl="http://localhost:3000/api";
  }


  get(uri:String,header:object){
    return this.http.get(`${this.rooturl}/${uri}`,header);
  }
  post(uri:String,payload:Object,header:object)
  {
    return this.http.post(`${this.rooturl}/${uri}`,payload);
  }
  pget(uri:string){
    let authheader= { headers : new HttpHeaders({"authorization":` Bearer ${this.token.getToken("authorization")}`})}
    return this.http.get(`${this.rooturl}/${uri}`,authheader);
  }
}

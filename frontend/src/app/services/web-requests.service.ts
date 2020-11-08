import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpRequestService} from '../services/http-request.service';
import { LocalStorageService } from '../services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {

  constructor(private request:HttpRequestService, private token:LocalStorageService) {   }

  authheader={ headers: new HttpHeaders({"authorization": `${this.token.getToken("authorization")}`})}
  noauth= { headers: new HttpHeaders({"noauth":"true"})}

  newUser(data:Object){
      return this.request.post("signup",data,this.noauth);
  }

  verifyUser(data:object){
    return this.request.post("signin",data,this.noauth);
  }
  
  userprofile(){
    return this.request.pget("userprofile");
  }
}

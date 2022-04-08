import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpservice:HttpserviceService) { }

  registration(data:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }

     return this.httpservice.postMethodService('user/userSignUp', data, false, header);
  }

  login(data:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }
    return this.httpservice.postMethodService('user/login',data,false,header);
  }
  resetpassword(data:any)
  {
    console.log(data);
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }
    return this.httpservice.postMethodService('user/reset',data,false,header);
  }
}

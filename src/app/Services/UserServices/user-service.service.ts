import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpservice:HttpserviceService) { }

  registration(inputdata:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }

     return this.httpservice.postMethodService('user/userSignUp', inputdata, false, header);
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
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }
    return this.httpservice.postMethodService('user/reset',data,false,header);
  }
}

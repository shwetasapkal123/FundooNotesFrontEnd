import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpserviceService } from '../httpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // private info = new Subject<any>();
  // public store = this.info.asObservable();

  constructor(private httpservice:HttpserviceService) { }

  // updateData(text:any){
  //   this.info.next(text);
  // }
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

  logout(data:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
  }
  return this.httpservice.postMethodService('user/logout',data,true,header)
  }
}

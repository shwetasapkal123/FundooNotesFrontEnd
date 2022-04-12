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

  forgot(data:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpservice.postMethodService('user/reset',data,false,header)
  }

  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  resetpassword(data:any,token:any)
  {
    console.log(data);
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json' ,
        'Authorization':token,    
      })
    }
    return this.httpservice.postMethodService('user/reset-password',this.encode(data),false,header);
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

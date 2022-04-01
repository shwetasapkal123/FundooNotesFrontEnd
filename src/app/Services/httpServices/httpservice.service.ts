import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  CommonURL=environment.commonUrl

  //adding dependency injection
  constructor(private httpclient:HttpClient) { }

  //creating methods for thred operations
  postMethodService(remUrl:string, data:any, token:boolean=false,options:any) //currently we dont use token so false, data is of any type string, int we dont know so use datatype any
  {
    console.log(data);
    return this.httpclient.post(this.CommonURL+remUrl,data,token && options);
  }

  getMethodService(remUrl:string, token:boolean=false,options:any)
  {
    return this.httpclient.get(this.CommonURL+remUrl,token && options)
  }

  putMethodService(remUrl:string, data:any,token:boolean=false,options:any)
  {
    return this.httpclient.put(this.CommonURL+remUrl,data,token && options)
  }

  deleteMethodService()
  {

  }
}

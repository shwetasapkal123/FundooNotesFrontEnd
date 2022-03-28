import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpservice:HttpserviceService) { }

  addNote(data:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'     
      })
    }

    return this.httpservice.postMethodService('notes/addNotes', data, false, header);
  }
}

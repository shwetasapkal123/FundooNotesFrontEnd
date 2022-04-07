import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 token:any;
 
  constructor(private httpservice:HttpserviceService) { 
    this.token=localStorage.getItem("token")
  }


  addNote(data:any)
  {
    console.log("token",this.token);
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }

    return this.httpservice.postMethodService('notes/addNotes', data, true, header);
  }

  Servicegetallnotes()
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.getMethodService('notes/getNotesList',true,header)
  }

  updateService(data:any)
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
        'Authorization':this.token    
      })
    }
    return this.httpservice.postMethodService('notes/updateNotes',data,true,header)
  }

  archieveService(data:any)
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.postMethodService('notes/archiveNotes',data,true,header)
  }

  archieveNotes()
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.getMethodService('notes/getArchiveNotesList',true,header)
  }

  trashService(data:any)
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.postMethodService('notes/trashNotes',data,true,header)
  }

  trashNotes()
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.getMethodService('notes/getTrashNotesList',true,header)
  }

  deleteNotesForever(data:any)
  {
    console.log("token",this.token);

    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json', 
         'Authorization':this.token
      })
    }
    return this.httpservice.postMethodService('notes/deleteForeverNotes',data,true,header)
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archivelist:any; 
  archieveMessage="refresh archieve"
  constructor( private noteservice:NoteService) { }

  ngOnInit(): void {
    this.archieveNotesService()
  }

  
  archieveNotesService()
  {
    this.noteservice.archieveNotes().subscribe((result:any)=>{
      this.archivelist=result.data.data
      console.log("archive notes",this.archivelist)
   })
  }
  receiveMessage(event:any){
 this.archieveNotesService()
  }

}

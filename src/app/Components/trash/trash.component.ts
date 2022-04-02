import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 trashlist:any;

  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
  
    this.trashNotesService()
  }

  trashNotesService()
  {
    this.noteservice.archieveNotes().subscribe((result:any)=>{
      this.trashlist=result.data.data
      console.log("trash notes",this.trashlist)
   })
  }
}

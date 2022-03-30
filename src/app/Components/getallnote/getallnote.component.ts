import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
 notelist:any;

  constructor(private formbuilder:FormBuilder,private noteservice:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  
  getallnotes()
  {
    this.noteservice.Servicegetallnotes().subscribe((res:any)=>
    {
      console.log("res=",res.data.data);
      this.notelist=res.data.data
    })
  }
  
  receiveMessage($event:any){
    this.getallnotes()
  }
}

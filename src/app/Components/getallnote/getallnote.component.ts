import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private noteservice:NoteService) { }

  ngOnInit(): void {
  }

}

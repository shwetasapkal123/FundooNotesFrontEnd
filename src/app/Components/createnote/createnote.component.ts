import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  public note:boolean=true;
  createNoteForm!: FormGroup;
  submitted=false;

  constructor( private formbuilder:FormBuilder,private noteservice:NoteService) { }

  ngOnInit(): void {
    this.createNoteForm=this.formbuilder.group({
      title:['',Validators.maxLength],
      takeNote:['',Validators.maxLength]
    })
  }

  OnSubmit(){
    this.submitted=true;
    if(this.createNoteForm.valid)
    {
      console.log(this.createNoteForm.value);

      let data={
        title:this.createNoteForm.value.title,
        description:this.createNoteForm.value.takeNote
      }
      this.noteservice.addNote(data).subscribe((res:any)=>
      {
        console.log(res);
      })
    }
    else
    {
      console.log("enter data");
    }
  }

  onNoteClick()
  {
    this.note=false;
    if(this.note=true)
    {
      console.log("title");
    }
    else
    {
      console.log("234");
    }
  }
}

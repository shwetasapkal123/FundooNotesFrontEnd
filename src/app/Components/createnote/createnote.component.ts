import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  [x: string]: any;
  showTitle=false;
  public note:boolean=true;
  createNoteForm!: FormGroup;
  submitted=false;
  @Output() messageEvent = new EventEmitter<any>();
 

  constructor( private formbuilder:FormBuilder,private noteservice:NoteService) { }

  ngOnInit(): void {
    this.createNoteForm=this.formbuilder.group({
      title:['',Validators.maxLength],
      takeNote:['',Validators.maxLength]
    })
  }

  OnSubmit(){
    this.submitted=true;
    console.log(this.createNoteForm.value);
    if(this.createNoteForm.valid)
    {

      let data={
        title:this.createNoteForm.value.title,
        description:this.createNoteForm.value.takeNote
      }
      this.noteservice.addNote(data).subscribe((res:any)=>
      {
        console.log(res);
        this.messageEvent.emit(res)
      })
    }
    else
    {
      console.log("enter data");
    }
  }

  show()
  {
    this.showTitle=true;
  }
  close()
  {
    this.showTitle=false;
  }
  // onNoteClick()
  // {
  //   this.note=false;
  //   if(this.note=true)
  //   {
  //     console.log("title");
  //   }
  //   else
  //   {
  //     console.log("234");
  //   }
  // }
}

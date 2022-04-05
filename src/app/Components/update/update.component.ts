import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:any;
  title:any;
  description:any;

  constructor(private note:NoteService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.id=this.data.id;
   this.title=this.data.title;
    this.description=this.data.description;
  //console.log("data= ",this.data)
  }

  onNoClick(): void {
    console.log("data=",this.id);
    let data=
    {
      noteId:this.id,
      title:this.title,
      description:this.description
    }
    this.note.updateService(data).subscribe((res:any)=>
    {
      console.log("update response=",res);
    })
    this.dialogRef.close();
  }
}

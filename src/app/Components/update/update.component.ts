import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { DataService } from 'src/app/Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
})
export class UpdateComponent implements OnInit {
  id:any;
  title:any;
  description:any;
  @Output() refreshUpdate = new EventEmitter<any>();
  upateMessage="refresh Update"

  message!: string;
  subscription: Subscription = new Subscription;


  constructor(private note:NoteService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataup: DataService) { }

  ngOnInit(): void {
    this.id=this.data.id;
   this.title=this.data.title;
    this.description=this.data.description;
    //console.log("data= ",this.data)
    // this.onNoClick()
    this.subscription = this.dataup.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
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
      this.refreshUpdate.emit(res)
    })
    this.dialogRef.close();
  }

}

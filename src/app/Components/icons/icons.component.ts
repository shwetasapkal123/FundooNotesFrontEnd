import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  //message: any;
  @Input() childMsg:any;

  @Output() refresh = new EventEmitter<any>();
  archieveMessage="refresh archieve"
  trashMessage="trash refresh"
  trashclick=false;

  constructor(private note:NoteService,) { }

  ngOnInit(): void {
    // this.id=this.data.id;
    // this.title=this.data.title;
    //  this.description=this.data.description; 
    //this.archievebutton()
    console.log("message ",this.childMsg);
  }

  archievebutton()
  {

    let data={
      noteIdList:[this.childMsg.id],
      isArchived:true,
    }
    this.note.archieveService(data).subscribe((res:any)=>
    {
      console.log("archive note is =",res);
      this.refresh.emit(this.archieveMessage);
      //this.childMsg.emit(res)
    })
  }

  trashbutton()
  {
    let data={
      noteIdList:[this.childMsg.id],
      isDeleted:true,
    }
    this.note.trashService(data).subscribe((res:any)=>
    {
      console.log("trash notes are: ",res);
      this.refresh.emit(this.trashMessage);
    })
  }
  // trashShow()
  // {
  //   this.trashclick=true;
  // }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { TrashComponent } from '../trash/trash.component';


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
  colorMessage="color pallete refresh"

  trashclick=false;
  isDisplayNoteComponent=false;
  isTrashComponent=false;
  isArchieveComponent=false;

  colorsArr = [{Colorcode:"#f28b82"},{Colorcode:"#fbbc04"},{Colorcode:"#fff475"},{Colorcode:"#ccff90"},{Colorcode:"#a7ffeb"},{Colorcode:"#cbf0f8"},{Colorcode:"#aecbfa"},{Colorcode:"#aecbfa"},{Colorcode:"#d7aefb"},{Colorcode:"#fdcfe8"},{Colorcode:"#e6c9a8"},{Colorcode:"#e8eaed"}];

  constructor(private note:NoteService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //console.log("message ",this.childMsg);

    let SelComp = this.route.snapshot.component;

    if(SelComp==DisplaynoteComponent)
    {
      this.isDisplayNoteComponent=true;
    }

    if(SelComp==TrashComponent)
    {
      this.isTrashComponent=true;
    }

    if(SelComp==ArchiveComponent)
    {
      this.isArchieveComponent=true;
    }
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

  unarchivebutton(){
    let data = {
      noteIdList: [this.childMsg.id],
      isArchived: false,
    }
    this.note.archieveService(data).subscribe((res:any)=>{
      console.log("unarchive a note",res);
      this.refresh.emit(this.archieveMessage);
    })
  }
  deleteForeverNotes()
  {
    let data={
      noteIdList:[this.childMsg.id],
      isDeleted:true,
    }
    this.note.deleteNotesForever(data).subscribe((res:any)=>
    {
      console.log("delete note forever = ",res);
      this.refresh.emit(this.trashMessage);
    })
  }
   
  restoreNotes()
  {
    let data = {
      noteIdList: [this.childMsg.id],
      isDeleted: false,
    }
    this.note.trashService(data).subscribe((res:any)=>{
    console.log("note restored",res);
    this.refresh.emit(this.trashMessage);
    })
  }

  colorNotesforBackground(color:any)
  {
    let data = {
      color: color,
      noteIdList: [this.childMsg.id],
    }

    this.note.colorPallete(data).subscribe((res:any)=>{
      console.log("color a note",res);
      this.refresh.emit(this.colorMessage);
    })
  }
  
}

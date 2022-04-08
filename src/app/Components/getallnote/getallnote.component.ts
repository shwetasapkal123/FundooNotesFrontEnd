import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { DataService } from 'src/app/Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss'],
  template: `
    {{message}}
  `,
  
})
export class GetallnoteComponent implements OnInit {
 notelist:any;

 message!: string;
  subscription: Subscription = new Subscription;

  constructor(private formbuilder:FormBuilder,private noteservice:NoteService,private data: DataService) { }

  ngOnInit(): void {
    this.getallnotes()

    this.subscription = this.data.currentMessage.subscribe((message: string) => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getallnotes()
  {
    this.noteservice.Servicegetallnotes().subscribe((res:any)=>
    {
      console.log("res=",res.data.data);
      this.notelist=res.data.data
      
      this.notelist=this.notelist.filter(function(ele:any)
      {
        return ele.isDeleted === false && ele.isArchived === false;
      })
    })
  }
  
  receiveMessage($event:any){
    this.getallnotes()
  }
}

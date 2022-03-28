import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  public note:boolean=true;

  constructor() { }

  ngOnInit(): void {
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

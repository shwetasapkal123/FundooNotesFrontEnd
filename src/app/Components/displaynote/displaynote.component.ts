import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { filter } from 'rxjs';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
 note:any;
  @Input() childMsg:any;
  @Output() refreshEvent = new EventEmitter<any>();
  @Output() refreshUpdate = new EventEmitter<any>();
  displayMessage="note refresh"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.note=result
      this.refreshUpdate.emit(this.displayMessage)
    });
  }
  receivedMessage(event:any)
  {
    console.log(event);
    this.refreshEvent.emit(this.displayMessage)
    //console.log(this.displayMessage);
    // this.refreshEvent.emit(this.displayMessage)
  }
}

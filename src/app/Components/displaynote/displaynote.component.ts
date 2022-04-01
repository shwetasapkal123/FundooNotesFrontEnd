import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
 note:any;
  @Input() arrayofNote:any;
  
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
    });
  }
}

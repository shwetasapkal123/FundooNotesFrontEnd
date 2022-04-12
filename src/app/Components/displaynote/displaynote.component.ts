import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { filter } from 'rxjs';
import { GridListViewService } from 'src/app/Services/gridListdata/grid-list-view.service';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  note: any;
  filteredString = '';

  @Input() childMsg: any;
  @Output() refreshEvent = new EventEmitter<any>();

  displayMessage = "note refresh"
  gridList: any;
  constructor(public dialog: MatDialog, private nextData: GridListViewService,) { }

  ngOnInit(): void {
    this.nextData.store.subscribe(a => this.gridList = a)
    this.nextData.storeForpipe.subscribe(b => this.filteredString = b)
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      data: note,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.note = result
    });
  }
  receivedMessage(event: any) {
    console.log(event);
    this.refreshEvent.emit(this.displayMessage)
  }
}

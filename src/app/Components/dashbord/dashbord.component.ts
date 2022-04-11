import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CreatenoteComponent } from '../createnote/createnote.component';
import { GridListViewService } from 'src/app/Services/gridListdata/grid-list-view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  grid = false;
  formatGridList = false;

  filteredString: string = '';

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private nextData: GridListViewService,private router:Router) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // gridlist()
  // {
  //   this.grid=true;
  // }

  FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }

  formatListView() {
    this.grid = false
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }

  formatGridView() {
    this.grid = true
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }

  filter(filteredString:any)
  {
      this.nextData.dataPipe(filteredString.target.value);
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("logout sucessfully!!!");
  }
}

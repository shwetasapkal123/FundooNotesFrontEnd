import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FindMailComponent } from './find-mail/find-mail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import {MatCardModule} from '@angular/material/card';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { IconsComponent } from './Components/icons/icons.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdateComponent } from './Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import {MatMenuModule} from '@angular/material/menu';
import { EditLabesComponent } from './Components/edit-labes/edit-labes.component';
import { RemindersComponent } from './Components/reminders/reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    FindMailComponent,
    ResetpasswordComponent,
    DashbordComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
    IconsComponent,
    GetallnoteComponent,
    UpdateComponent,
    ArchiveComponent,
    TrashComponent,
    EditLabesComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { FindMailComponent } from './find-mail/find-mail.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { IconsComponent } from './Components/icons/icons.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'signup',component:RegistrationComponent},
  {path:'signin',component:LoginComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'mailsearch',component:FindMailComponent},
  {path:'dashboard',component:DashbordComponent,
 children:[
  {path:'getallnotes',component:GetallnoteComponent},
  {path:'archieve',component:ArchiveComponent},
  {path:'trash',component:TrashComponent},
 ] 
 },
 
  {path:'icons',component:IconsComponent},
  {path:'createnote',component:CreatenoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

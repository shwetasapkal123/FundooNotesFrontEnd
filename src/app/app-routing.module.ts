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
import { EditLabesComponent } from './Components/edit-labes/edit-labes.component';
import { RemindersComponent } from './Components/reminders/reminders.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {path:'signup',component:RegistrationComponent},
  
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'mailsearch',component:FindMailComponent},

  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},

  {path:'dashboard',component:DashbordComponent,canActivate:[AuthenticationGuard],
 children:[
  {path:'getallnotes',component:GetallnoteComponent},
  {path:'archieve',component:ArchiveComponent},
  {path:'trash',component:TrashComponent},
  {path:'editlabel',component:EditLabesComponent},
  {path:'reminders',component:RemindersComponent},
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

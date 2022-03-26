import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/UserServices/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.resetPassword=this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  OnSubmit(){
    this.submitted=true;
    if(this.resetPassword.valid)
    {
      console.log(this.resetPassword.value);

      let data={
        email:this.resetPassword.value.email,
        password:this.resetPassword.value.password
      }
      this.user.login(data).subscribe((res:any)=>
      {
        console.log(res);
      })
    }
    else
    {
      console.log("enter data");
    }
  }

  onReset() {
    this.submitted = false;
    this.resetPassword.reset();
}

}

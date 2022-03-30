import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder, private user:UserServiceService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required]     
    });
  }

  OnSubmit(){
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);

      let data={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
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
    this.loginForm.reset();
}

}
function inputdata(inputdata: any) {
  throw new Error('Function not implemented.');
}


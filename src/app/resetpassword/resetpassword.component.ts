import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../Services/UserServices/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  submitted=false;
  token:any;

  constructor(private formBuilder: FormBuilder,private user:UserServiceService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPassword=this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
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
      this.user.resetpassword(data,this.token).subscribe((res:any)=>
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

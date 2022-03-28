import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted=false;
  show=false;

  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required],
      service:['advance']
    });
  }
  
  OnSubmit(){
    this.submitted=true;
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value);

      let data={
        firstName:this.registerForm.value.firstname,
        lastName:this.registerForm.value.lastname,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        service:this.registerForm.value.service
      }
      this.user.registration(data).subscribe((res:any)=>
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
    this.registerForm.reset();
}

// showdatacheckbox()
// {
//   this.show=true;
//   if(this.show==true)
//     {
//       type:'password';
//     }
//     else{

//       type:'text';
//     }
// }

}


function showdatacheckbox() {
  throw new Error('Function not implemented.');
}


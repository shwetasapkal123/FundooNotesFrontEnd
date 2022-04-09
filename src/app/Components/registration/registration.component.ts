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
  isPass=false;
  inputTypePass:string="password";

  constructor(private formBuilder: FormBuilder,private user:UserServiceService, private shareMsg:UserServiceService) { }

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

  passwordShow(event:any):void{
    event.target.checked ? this.inputTypePass="text" : this.inputTypePass="password";
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

  showdatacheckbox()
  {
    this.show=true;
    this.shareMsg.updateData(this.passChange().valueOf());
     if(this.isPass==true)
    {
     type:'text';
    }
    else{
     type:'password';     
   }
  }
  passChange()
  {
    if(this.isPass==false){
      this.isPass=true
      return this.isPass
    }
    else{
      this.isPass=false
      return this.isPass
    }
  }
}


function showdatacheckbox() {
  throw new Error('Function not implemented.');
}


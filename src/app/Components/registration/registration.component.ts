import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required]
    });
  }
  
  OnSubmit(){
    this.submitted=true;
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value);
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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-find-mail',
  templateUrl: './find-mail.component.html',
  styleUrls: ['./find-mail.component.scss']
})
export class FindMailComponent implements OnInit {
  mailSearch!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mailSearch=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
  }

  OnSubmit(){
    this.submitted=true;
    if(this.mailSearch.valid)
    {
      console.log(this.mailSearch.value);
    }
    else
    {
      console.log("enter data");
    }
  }

  onReset() {
    this.submitted = false;
    this.mailSearch.reset();
}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent implements OnInit {

  myform!:FormGroup;
  name_status:boolean = false;
  name_char_status:boolean = false;
  email_status:boolean = false;
  email_char_status:boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    })
  }


  checkName(){
    var name = this.myform.value.name;
    if(name == ''){
      this.name_status = true;
      this.name_char_status= false;
    }else{
      this.name_status = false;
      let reg = new RegExp('^[A-Za-z]{2,}$'); 
      if(reg.test(name)){
        this.name_char_status= false;
      }else{
        this.name_char_status = true;
      }
    }
  }

  checkEmail(){
    //email=/^([a-z]+@[a-z]+\.[a-z]{2,10})+$/;
    var email = this.myform.value.email;
    if(email == ''){
      this.email_status = true;
      this.email_char_status= false;
    }else{
      this.email_status = false;
      let reg = new RegExp('^([a-z]+@[a-z]+\.[a-z]{2,10})+$'); 
      if(reg.test(email)){
        this.email_char_status= false;
      }else{
        this.email_char_status = true;
      }
    }
  }


  submit(){
      console.log(this.myform.controls);
      console.log(this.myform.value) 
  }
  
}

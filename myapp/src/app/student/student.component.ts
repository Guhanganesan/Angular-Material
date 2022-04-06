import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  student_form!: FormGroup;

  ngOnInit(): void {
    this.student_form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nick_name: ['', Validators.required],
      family_name: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.first_name);
    console.log('Email', form.value.last_name);
    console.log('Message', form.value.nick_name);
    console.log('Name', form.value.family_name);
    console.log('Email', form.value.address);
    console.log('Message', form.value.email);
    console.log('Message', form.value.mobile);
    console.log('Email', form.value.username);
    console.log('Message', form.value.password);
  }

}

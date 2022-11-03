import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: [''],
      emailid: [''],
      password: [''],
    });
  }
  register(){
    this.http.post<any>("http://localhost:3001/register_user",this.registerForm.value).subscribe(res=>{
      alert("Register Successfull");
      this.registerForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("SOmething went wrong")
    })
  }
}

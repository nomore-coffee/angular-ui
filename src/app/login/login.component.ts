import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup
  constructor(private formbuilder : FormBuilder , private http:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      emailid:[''],
      password:['']
    })
  }
  login(){
    this.http.post<any>("http://localhost:3001/login", this.loginForm.value).subscribe(res=>{
      alert("Login successfull");
      this.loginForm.reset();
      this.router.navigate(['weather'])
    },err=>{
      alert("SOmething went worng")
    })
  }
}

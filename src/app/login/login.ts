import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  formgroup!: FormGroup;
  constructor(private fb: FormBuilder,
              private authservice:LoginService, private router : Router) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      username: ["",[Validators.required]],
      password: ["",[Validators.required]],
    });
  }

  handlLogin() {
    let username=this.formgroup.value.username;
    let password=this.formgroup.value.password;
    this.authservice.login(username,password).subscribe({
      next: (result:any) => {
        this.authservice.loadProfile(result);

        // console.log('LOGIN RESULT:', result);
        //
        // const token = result['access-token'];
        //
        // console.log('TOKEN:', token);
        //
        // this.authservice.loadProfile(token);


        this.router.navigateByUrl("/admin/customers");
      },
    error: error => {

        console.log(error)}} )

  }
}

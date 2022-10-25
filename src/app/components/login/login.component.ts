import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Users } from 'src/interface/users';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form(): LoginComponent {
    throw new Error('Method not implemented.');
  }

  @Input() title: string= "Log In";
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private titlePage: Title,
  ) {
    this.titlePage.setTitle("Log In")
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  login() {
    this.loading = true;
    this.http.get<any>("https://shop-351b7-default-rtdb.europe-west1.firebasedatabase.app/users.json")
    .subscribe();
    // .subscribe( res=> {
    //   const user = res.find((u:Users) => {
    //     return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password;
    //   });
    //   if (user) {
    //     alert("Success Log In");
    //     this.loginForm.reset();
    //     this.router.navigate(['home'])
    //   } else {
    //     alert("User not Found");
    //   }
    // }, err =>{
    //   alert("something went wrong");
    // })
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}

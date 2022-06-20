import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


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
    private titlePage: Title
  ) { 
    this.titlePage.setTitle("Log In")
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  login(): void {
    this.loading = true;
    this.http.get<any>("http://localhost:3000/Users")
      .subscribe(res => {
        const user = res.find((u: any) => {
          return u.email && this.loginForm.value.email && u.password && this.loginForm.value.password
        });
        if (user) {
          this.router.navigate(['home']);
          this.loading = false;
        } else {
          alert("Something went wrong!");
        }
      })
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}

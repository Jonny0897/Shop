import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector:'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  @Input() title: string = "Sign In";
  signinForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private titlePage: Title,
    private firestore: AngularFirestore
  ) {
    this.titlePage.setTitle("Sing In");
   }

  ngOnInit(): void {
    this.form();
  }

  form(): void {
    this.signinForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ])
    },);
  }

  signin(): void {
    this.loading = true;
    this.http.post<any>("https://shop-351b7-default-rtdb.europe-west1.firebasedatabase.app/users.json", this.signinForm.value)
      .subscribe({
        next: (v) => {
          this.signinForm.reset();
          this.loading = false;
          this.router.navigate(['home']);
        },
        error: (e) => alert("Something Wrong")
      })
  }

  passwordValidation(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : {
        'notMatch': true
      };
  }

  get username() {
    return this.signinForm.get('username')!;
  }

  get email() {
    return this.signinForm.get('email')!;
  }

  get password() {
    return this.signinForm.get('password')!;
  }

  get confirmPassword() {
    return this.signinForm.get('confirPassword')!;
  }


}

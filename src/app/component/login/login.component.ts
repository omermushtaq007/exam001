import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    public FormBuilder: FormBuilder,
    private auth: AuthService) {
      this.loginForm = this.FormBuilder.group({
        email: [''],
        password: [''],
      });
    }

  ngOnInit(): void {}
  Google() {
    this.auth.login();
  }
  login(){
    // console.log(this.loginForm.value);
    var email = this.loginForm.value.email;
    var password = this.loginForm.value.password;
    firebase.default.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
}

import { AppUser } from 'src/app/model/app-user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users: AppUser[];
  public registerForm: FormGroup;
  constructor(
    public FormBuilder: FormBuilder,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public userService: UserService
  ) {
    this.registerForm = this.FormBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.userService.save(user);
      }
    });
  }

  ngOnInit(): void {}

  Google() {
    this.authService.login();
  }

  signUP() {
    let name = this.registerForm.value.name;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    // console.log(email , password);
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)

      .then((userCredential) => {
        var x = firebase.default.auth().currentUser;
        x?.updateProfile({
          displayName: name,
        }).then(() => {
          return userCredential.user;
        });

        // return userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

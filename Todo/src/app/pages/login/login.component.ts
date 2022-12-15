import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void { }
  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // .then((data => {
    //    console.log(data) // aqui é possível pegar todos os dados de usuário
    // }));
    // this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()); diversas possibilidades
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../shared/models/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(
    private FireAuth:AngularFireAuth, private Store:AngularFirestore
  ) { }
  RegisterUser(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.FireAuth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }
  loginEmailUser(email:string, pass:string){
    return new Promise((resolve,reject)=>{this.FireAuth.signInWithEmailAndPassword(email,pass)
      .then((userData:any)=>resolve(userData),
      (err:any)=>reject(err));
    })
  }
  IsAuth(){
    return this.FireAuth.authState.pipe(map((auth:any)=>auth));
  }
  logoutUser(){
    return this.FireAuth.signOut();
  }
  private updateUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.Store.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      name:user.name,
      email: user.email,
      password:user.password
    }
    return userRef.set(data, { merge: true })
  }
}

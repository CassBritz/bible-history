import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
    <p>app works</p>
    <div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>

      <!--The content below is only a placeholder and can be replaced.-->
      <div style="text-align:center" class="content">
        <h1>Welcome to {{ title }}!</h1>
      </div>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `,
  styles: [],
})
export class AppComponent {
  title = 'visual-bible-history';

  constructor(public auth: AngularFireAuth) {}
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}

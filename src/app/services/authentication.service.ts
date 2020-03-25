import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignInResult } from '../contracts/sign-in-result';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient) {

    }
  public signIn(userName: string, password: string): Observable<SignInResult> {

    const body = {
      userName,
      password
    };

    return this.http.post<SignInResult>(
      'http://infernal.azurewebsites.net/api/Authentication/SignIn', body
    );
  }

}

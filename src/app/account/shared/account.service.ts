import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { Account } from 'src/app/interfaces/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginRoute = '/user/login';
  logoutRoute = '/user/logout';
  createAccountRoute = '/user'

  constructor(
    private httpClient: HttpClient
  ) { }

  login = async (user: User): Promise<boolean> => {
    const url = `${environment.apiUrl}${this.loginRoute}?username=${user.username}&password=${user.password}`;

    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const result$ = this.httpClient.get<any>(url, { headers: headers });
    const result = await firstValueFrom(result$);
    if (result && result.code == 200) {
      const token = result.message.replace('logged in user session:', '')
      window.localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  logout = async (): Promise<boolean> => {
    const url = `${environment.apiUrl}${this.logoutRoute}`;
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const result$ = this.httpClient.get<any>(url, { headers: headers });
    const result = await firstValueFrom(result$);

    if (result && result.code == 200) {
      window.localStorage.removeItem('token');
      return true;
    }
    return false;
  }

  createAccount = async (account: Account): Promise<boolean> => {
    const url = `${environment.apiUrl}${this.createAccountRoute}`;
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const result$ = this.httpClient.post<any>(url, account, { headers: headers });
    const result = await firstValueFrom(result$);
    if (result && result.code == 200) {
      const user: User = {
        username: account.username,
        password: account. password
      }
      return this.login(user);
    }
    return false;
  }
}

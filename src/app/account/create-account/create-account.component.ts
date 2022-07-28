import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    userStatus : 0
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      await this.accountService.createAccount(this.account);
      this.router.navigate(['']);
    } catch(error) {
      console.error(error);
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../account/shared/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() pageRoute: string | undefined;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async logout() {
    try {
      await this.accountService.logout();
      this.router.navigate(['/login']);
    } catch(error) {
      console.error(error);
    }
  }

}

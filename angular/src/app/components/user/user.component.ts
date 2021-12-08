import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userSubscription: Subscription = null;
  currentUser: User = { id: '1', username: 'hello' }

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //this.userSubscription = this.accountService.user.subscribe(user => this.currentUser = user);
  }

  login(): void {
    console.log(this.userForm)
    const user = this.userForm.get('username').value;
    const password = this.userForm.get('password').value;
    if (!user || !password) {
      console.error('user or password are empty')
    } else {
      this.accountService.login(user, password);
    }
  }

  logout(): void {
    this.accountService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.user
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';
import {UserService} from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users = USERS;
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}

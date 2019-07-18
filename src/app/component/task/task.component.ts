import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  selectedUser: User = new User();
  userArray: User[] = [
    {
      id: 1,
      username: 'Jhooomn',
      country: 'Brasil'
    },
    {
      id: 2,
      username: 'Frida',
      country: 'Francia'
    },
    {
      id: 3,
      username: 'Rebecca',
      country: 'USA'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  addOrEdit() {
    if (this.selectedUser.id == 0) {
      this.selectedUser.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUser);
    }
    this.selectedUser = new User();
  }

  edit(user: User) {
    this.selectedUser = user;
  }

  delete(){
    this.userArray = this.userArray.filter(x => x != this.selectedUser);
  }

}

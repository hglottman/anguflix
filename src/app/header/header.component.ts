import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
    this.user = userService.myUser;
   }

  ngOnInit() {
  }

}



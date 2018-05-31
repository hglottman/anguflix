import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { HeaderComponent } from '../header/header.component';
import { MoviesService } from '../moviesService';



@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})


export class BudgetComponent implements OnInit {

  // @Input() user: User;
  myUser: User;

  constructor(private moviesService: MoviesService) {
    this.myUser = this.moviesService.getUser();
  }

  ngOnInit() {
  }

  updateBudget() {
  }
}



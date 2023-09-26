import { Component, OnInit } from '@angular/core';
import { BudgetlistService } from '../services/budgetlist.service';
import { Budget } from '../home/interfaces/budget.component';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css']
})
export class BudgetlistComponent {


  constructor ( private budgetlistService: BudgetlistService){

  }

  get lists() {
    return this.budgetlistService.getBudgetList();
  }
  

  sortByABC() {
    this.lists.sort((a, b) => {
      if(a && b && a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }

  sortByDate() {
    this.lists.sort((a, b) => {
      const dateA = new Date(a.fecha).getTime();
      const dateB = new Date(b.fecha).getTime();
      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    })
  }

  
}

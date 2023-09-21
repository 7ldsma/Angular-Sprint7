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
  

  
  
}

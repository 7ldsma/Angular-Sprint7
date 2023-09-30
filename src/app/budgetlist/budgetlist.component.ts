import { Component, OnInit } from '@angular/core';
import { BudgetlistService } from '../services/budgetlist.service';
import { Budget } from '../home/interfaces/budget.component';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css']
})
export class BudgetlistComponent {

  budgetArray: Budget[] = [];
  newBugetArray: Budget[] = [];
  seachKeyword: string = "";
  searchResults: Budget[] = [];
  showResults: boolean = false;

  constructor ( private budgetlistService: BudgetlistService){  }


  ngOnInIt(){
    this.budgetArray = this.budgetlistService.getBudgetList();

  }

  get lists() {
    return this.budgetlistService.getBudgetList();
  }
  


  sortByABC() {
    this.lists.sort((a, b) => {
      if(a && b && a.client && b.client) {
        return a.client.localeCompare(b.client);
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


  resetBudgetOrder() {
    this.newBugetArray = [...this.budgetArray];
    this.showResults = false;

  }


  searchBudget(){
    if(this.seachKeyword.trim() !== ''){
      const searchedWord = this.seachKeyword.toLowerCase();
      this.searchResults = this.lists.filter((item) => item.client?.toLowerCase().includes(searchedWord));

      this.showResults = true;

    }else {
      this.showResults = false;
    }
  }

  
}

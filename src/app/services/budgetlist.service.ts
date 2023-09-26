import { Injectable } from '@angular/core';
import { Budget } from '../home/interfaces/budget.component';


@Injectable({providedIn: 'root'})
export class BudgetlistService {

    constructor(  ) { }

    private total:number = 0;
    private budgetList: Budget[] = [];


    addBudget(data: Budget) {
        this.budgetList.push(data);
        
        console.log(this.budgetList)
      }


    getBudgetList(): Budget[] {
        return this.budgetList;
      }



    
    calculateTotal(service:number, pages:number, languages:number) {
        
        if(pages > 2 && languages === 0){
            this.total = service + (pages * 10);
        } else {
            this.total = service + (pages * languages * 30);

        }
        
        console.log(this.total, "hooolllaa");    
        return this.total;

    }
    

    getTotal():number {
        return this.total;
    }
   
}
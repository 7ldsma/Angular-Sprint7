import { Injectable } from '@angular/core';
import { Budget, Webservice } from '../home/interfaces/budget.component';


@Injectable({providedIn: 'root'})
export class BudgetlistService {

    constructor(  ) { }

    public total:number = 0;
    private budgetList: Budget[] = [];

    // public budget: Budget = {
    //     name: '',
    //     client: '',
    //     web: false,
    //     consultoria: false,
    //     adds: false,
    //     total: 0,
    //     fecha: new Date,
    // };

    public webBudget: Webservice = {
        pages : 1,
        languages: 1,
    }



    addBudget(data: Budget) {
        this.budgetList.push(data);
        
      }


    getBudgetList(): Budget[] {
        return this.budgetList;
      }


      updatePrice(budget: Budget){

        let totalWebBudget:number = 0;
    
        if(budget.web) {
            totalWebBudget = this.calculateTotal(500, 1,1);
            console.log("TOLSS")
            } else {
            totalWebBudget = 0;
        }        
    
        let consultingB = budget.consultoria ? 300 : 0;
        let addsB = budget.adds ? 200 : 0;
    
        let totalBudget = (totalWebBudget + consultingB + addsB);
    
        this.total = totalBudget;
        
    
    }


    
    calculateTotal(service:number, pages:number, languages:number) {
        
        if(pages > 2 && languages === 0){
            this.total = service + (pages * 10);
        } else {
            this.total = service + (pages * languages * 30);

        }
        
        return this.total;
        console.log(this.total)
    }
  

        getTotal():number {
        return this.total;
    }
   
}
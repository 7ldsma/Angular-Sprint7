import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.component';

@Injectable({providedIn: 'root'})
export class HomeService {
    
    public budget : Budget = {
        name: '',
        client: '',
        web: false,
        consultoria: false,
        adds: false,
        total: 0,
      };
    
    
    updatePrice(){

        if(this.budget.web) {
            this.budget.total = 500;
        } else {
            this.budget.total = 0;
        }

        if (this.budget.consultoria) {
            this.budget.total += 300;
        } else {
            this.budget.total += 0;
        }

        if (this.budget.adds) {
            this.budget.total += 200;
        } else {
            this.budget.total += 0;        
        }

        console.log(this.budget.total)
    }
      
      
      
    
}
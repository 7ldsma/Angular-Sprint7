import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService {
    constructor() { }
    
    private totalBudgetSubject = new BehaviorSubject<number>(0);
    totalBudget$ = this.totalBudgetSubject.asObservable();

    updateTotalBudget(total: number) {
    this.totalBudgetSubject.next(total);
  }

}
import { Injectable } from '@angular/core';
import { Budget, Webservice } from '../home/interfaces/budget.component';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class BudgetlistService {

    constructor( private activatedRoute: ActivatedRoute,
        private router: Router ) { }

    public total:number = 0;
    private budgetList: Budget[] = [];


    webService: boolean = false;
    consultingService: boolean = false;
    addsService: boolean = false;
    pages: number = 1;
    languages: number = 1;


    ngOnInIt(budget: Budget) {

        this.activatedRoute.queryParamMap.subscribe((param) => {
            budget.web = Boolean(param.get('WebService'))
            budget.consultoria = Boolean(param.get('ConsultingService'))
            budget.adds = Boolean(param.get('AddsService'))
        })
    }   
    

    appendQueryParam(budget: Budget){
        const queryParams = {} = {};

        // if(budget.web){
        //     queryParams: {WebService:boolean = true};
        // }

        // if(budget.consultoria) {
        //     queryParams['consultinService'] = true;
        // }

        // if(budget.adds) {
        //     queryParams['addsService'] = true;
        // }

        this.router.navigate(['/home'], {queryParams: {WebService : false, ConsultingService: false, AddsService: false}, queryParamsHandling: 'merge'});

    }



    settotalbudget():void{
        this.total =0 ;
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
            } else {
            totalWebBudget = 0;
        }        
    
        let consultingB = budget.consultoria ? 300 : 0;
        let addsB = budget.adds ? 200 : 0;
    
        let totalBudget = (totalWebBudget + consultingB + addsB);
    
        this.total = totalBudget;
        
        this.appendQueryParam(budget)
    
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